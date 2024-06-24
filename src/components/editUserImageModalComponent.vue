<script setup>
import Modal from 'bootstrap/js/dist/modal'
import { onMounted, ref } from 'vue'
import { getStorage, uploadBytes, ref as storageRef, getDownloadURL } from 'firebase/storage'
import { db, firebaseRef, firebaseApp, update } from '../firebaseSetUp'

// isLoading init
const isLoading = ref(false)

// 從父層ProfileView prop引入userData
const props = defineProps({
  userData: {
    type: Object,
    default: {}
  }
})

// editUserImageModal 定義showModal function
const modal = ref(null)
const editUserImageModal = ref(null)
const showModal = function () {
  modal.value.show()
  initModal()
}

/**
 * 確保重置相關欄位值
 * imgSrc selectedImage 圖片欄位清空
 */
const initModal = () => {
  imgSrc.value = ''
  selectedImage.value = null
}

// showModal開放父層使用
defineExpose({
  showModal
})
onMounted(() => {
  modal.value = new Modal(editUserImageModal.value)
})

const imgSrc = ref(null)
const selectedImage = ref(null)
/**
 * 選擇照片並顯示預覽
 * @param {Object} target - input欄位 change event target
 */
const addImage = function (target) {
  // 加入loading
  isLoading.value = true
  // 預覽照片
  if (target.files) {
    selectedImage.value = target.files[0]
    // FileReader讀取file
    let reader = new FileReader()
    reader.onload = (e) => {
      imgSrc.value = e.target.result
      // 解除loading
      isLoading.value = false
    }
    // 檔案轉為url
    reader.readAsDataURL(target.files[0])
  }
}

// drag file
const isDragged = ref(false)
/**
 * 檔案拖曳進目標內
 * @param {Object} event - drag event
 */
const handleDragOver = (event) => {
  // drag鼠標特效
  event.dataTransfer.dropEffect = 'copy'
  isDragged.value = true
  event.preventDefault()
}
/**
 * 檔案拖曳離開目標
 * @param {Object} event - drag event
 */
const handleDragLeave = (event) => {
  isDragged.value = false
  event.preventDefault()
}
/**
 * 檔案drop在目標
 * @param {Object} event - drop event
 */
const handleDrop = (event) => {
  // drop檔案時避免在網頁開啟檔案
  event.preventDefault()
  // drop檔案時觸發addImage新增檔案
  addImage(event.dataTransfer)
}

const modalDialog = ref(null)

/**
 * 進入下一步
 */
const toNextStep = function () {
  uploadImage()
}

/**
 * 上一步 回到上傳圖片
 */
const backToPreviousStep = () => {
  imgSrc.value = null
}

/**
 * 上傳圖片至firebase storage
 * 非同步function
 */
const uploadImage = async () => {
  // 加入loading
  isLoading.value = true
  // 取得上傳的image檔案
  const file = selectedImage.value
  if (!file) {
    console.error('No file selected.')
    isLoading.value = false
    return
  }
  const storage = getStorage(firebaseApp)
  // 設定上傳路徑
  const fileStorageRef = storageRef(storage, 'user/' + file.name)
  try {
    //上傳照片至firebase storage
    await uploadBytes(fileStorageRef, file)
    //等待上傳照片後取得上傳後的url
    const imageUrl = await getDownloadURL(fileStorageRef)
    // 成功上傳並取得imageUrl後執行 editUserImage 失敗則重新上傳
    if (imageUrl) {
      editUserImage(imageUrl)
    } else {
      throw new Error('Fail to get imageUrl from storage')
    }
  } catch (error) {
    isLoading.value = false
    console.error('Error uploading image:', error)
  }
}

/**
 * 將imageUrl update到firebase user
 * @param {String} imageUrl - 已上傳至firbase storage的image url
 */
const editUserImage = function (imageUrl) {
  // 設定上傳路徑
  const newUserData = {...props.userData}
  const itemsRef = firebaseRef(db, `userData/${props.userData.key}`)
  newUserData.media_url = imageUrl
  //  建立post資料
  update(itemsRef, newUserData)
    .then(() => {
      console.log('Data updated successfully!')
    })
    .catch((error) => {
      console.error('Error updating data:', error)
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="editUserImageModal"
    tabindex="-1"
    aria-labelledby="editUserImageModalLabel"
    aria-hidden="true"
    ref="editUserImageModal"
  >
    <button
      type="button"
      class="btn-close btn-close-white position-absolute top-0 end-0 m-3"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
    <div class="modal-dialog" ref="modalDialog">
      <div class="modal-content my-5">
        <div class="modal-header d-flex justify-content-center">
          <button
            class="btn position-absolute start-0 mx-3 text-primary"
            v-if="imgSrc"
            @click="backToPreviousStep"
          >
            上一步
          </button>
          <h5 class="modal-title" id="editUserImageModalLabel">更新使用者頭像</h5>
          <!-- 用imgSrc是否有值判斷按鈕是否顯示 -->
          <button
            class="btn position-absolute end-0 mx-3 text-primary"
            v-if="imgSrc"
            @click="toNextStep"
          >
            下一步
          </button>
        </div>
        <div class="d-flex flex-sm-column flex-md-row">
          <!-- 尚未上傳圖片 -->
          <!-- 用imgSrc是否有值判斷圖片上傳區是否顯示 -->
          <div
            class="modal-body align-items-center p-5"
            v-if="!imgSrc"
            @dragover.prevent="handleDragOver"
            @dragleave.prevent="handleDragLeave"
            @drop.prevent="handleDrop"
          >
            <div
              class="d-flex flex-column align-items-center justify-content-center"
              :class="isDragged ? 'text-primary' : ''"
            >
              <i class="bi bi-image pic-icon"></i>
              <span>將相片和影片拖曳到這裡</span>
              <label for="file-input" class="file-input-button btn btn-primary m-3"
                >從電腦選擇</label
              >
              <!-- 傳入change event -->
              <input
                type="file"
                id="file-input"
                accept="audio/*,video/*,image/*"
                @change="addImage($event.target)"
              />
            </div>
          </div>

          <!-- 顯示上傳之圖片 -->
          <!-- 用imgSrc是否有值判斷圖片上傳區是否顯示 -->
          <div class="modal-body d-flex flex-column align-items-center input-img-area p-0" v-else>
            <img :src="imgSrc" alt="" class="input-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <loading-overlay :active="isLoading" :is-full-page="true"></loading-overlay>
</template>

<style scoped lang="scss">
.pic-icon {
  font-size: 7rem;
}
input[type='file'] {
  display: none;
}
.input-img {
  width: 100%;
}
.modal-body {
  max-width: 700px;
  max-height: calc(100vh - 6rem - 70px);
  img {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
