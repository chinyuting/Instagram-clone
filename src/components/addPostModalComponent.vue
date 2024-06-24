<script setup>
import Modal from 'bootstrap/js/dist/modal'
import { onMounted, ref } from 'vue'
import { getStorage, uploadBytes, ref as storageRef, getDownloadURL } from 'firebase/storage'
import { db, firebaseRef, push, firebaseApp } from '../firebaseSetUp'
import { useUserDataStore } from '../stores/userDataStore.js'

// isLoading init
const isLoading = ref(false)

// addPostModal 定義showModal function
const modal = ref(null)
const addPostModal = ref(null)
const showModal = function () {
  modal.value.show()
  initModal()
}

/**
 * 確保重置相關欄位值
 * imgSrc selectedImage 圖片欄位清空
 * isSideModalShow 側邊modal關閉
 * modalDialog modal寬度定義
 */
const initModal = () => {
  imgSrc.value = ''
  isSideModalShow.value = false
  modalDialog.value.style.maxWidth = '700px'
  selectedImage.value = null
  isDragged.value = false
}

// showModal開放父層使用
defineExpose({
  showModal
})
onMounted(() => {
  modal.value = new Modal(addPostModal.value)
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
const isSideModalShow = ref(false)
/**
 * 進入下一步
 * 用isSideModalShow判斷
 * true-> 已開啟SideModal 執行uploadImage
 * false-> 尚未開啟SideModal 則開啟SideModal
 */
const toNextStep = function () {
  if (isSideModalShow.value) {
    uploadImage()
  } else {
    modalDialog.value.style.maxWidth = '1000px'
    isSideModalShow.value = true
  }
}

/**
 * 上一步 回到第一步上傳圖片
 * 用isSideModalShow判斷
 * true-> 重新定義modalDialog寬度 並關閉side modal
 */
const backToPreviousStep = () => {
  if (isSideModalShow.value) {
    modalDialog.value.style.maxWidth = '700px'
    isSideModalShow.value = false
  }
  isDragged.value = false
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
  const fileStorageRef = storageRef(storage, 'posts/' + file.name)
  try {
    //上傳照片至firebase storage
    await uploadBytes(fileStorageRef, file)
    //等待上傳照片後取得上傳後的url
    const imageUrl = await getDownloadURL(fileStorageRef)
    // 成功上傳並取得imageUrl後執行 pushPostToFirebase 失敗則重新上傳
    if (imageUrl) {
      pushPostToFirebase(imageUrl)
    } else {
      throw new Error('Fail to get imageUrl from storage')
    }
  } catch (error) {
    isLoading.value = false
    console.error('Error uploading image:', error)
  }
}

// 引入 useUserDataStore 取得userData
const userData = useUserDataStore()
const postCaption = ref('')

/**
 * 將post push到firebase
 * @param {String} imageUrl - 已上傳至firbase storage的image url
 */
const pushPostToFirebase = function (imageUrl) {
  // 設定上傳路徑
  const itemsRef = firebaseRef(db, 'postsData')
  //  建立post資料
  const currentTime = new Date()
  const newPostData = {
    caption: postCaption.value,
    id: currentTime.getTime() + userData.userData.id,
    isThumb: false,
    media_type: 'IMAGE',
    media_url: imageUrl,
    permalink: '',
    postownerid: userData.userData.id,
    timestamp: currentTime.toISOString(),
    username: userData.userData.username
  }
  push(itemsRef, newPostData)
    .then(() => {
      console.log('Data successfully written to Firebase!')
      modal.value.hide()
      postCaption.value = ''
    })
    .catch((error) => {
      console.error('Error writing data to Firebase:', error)
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
    id="addPostModal"
    tabindex="-1"
    aria-labelledby="addPostModalLabel"
    aria-hidden="true"
    ref="addPostModal"
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
          <h5 class="modal-title" id="addPostModalLabel">建立新貼文</h5>
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

          <!-- side Modal -->
          <div class="border-start p-2 w-100" v-if="isSideModalShow">
            <div class="d-flex align-self-center align-middle">
              <div class="rounded-circle user-pic">
                <img :src="userData.userData.media_url" alt="" />
              </div>
              <p class="align-middle my-auto ms-2 fw-bold">{{ userData.userData.username }}</p>
            </div>
            <textarea
              type="text"
              placeholder="撰寫說明文字......"
              class="post-description-input py-2 w-100"
              v-model="postCaption"
            ></textarea>
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
.user-pic {
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  object-fit: contain;
  position: relative;
  img {
    /* 圖片置中 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 150%;
  }
}
.post-description-input {
  height: calc(100% - 40px);
  border: 0;
  resize: none;
  &:focus {
    outline: none;
  }
}
</style>
