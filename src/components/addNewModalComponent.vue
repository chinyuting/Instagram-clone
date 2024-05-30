<script setup>
import Modal from 'bootstrap/js/dist/modal'
import { onMounted, ref } from 'vue'
import { getStorage, uploadBytes, ref as storageRef, getDownloadURL } from 'firebase/storage'
import { db, ref as firebaseRef, push, firebaseApp } from '../firebaseSetUp'
import { useUserDataStore } from '../stores/userDataStore.js'

const isLoading = ref(false)
const modal = ref(null)
const addNewModal = ref(null)
// 開啟Modal時清空imgSrc欄位
const showModal = function () {
  modal.value.show()
  imgSrc.value = ''
  isModalSideShow.value = false
  modalDialog.value.style.maxWidth = '700px'
  selectedImg.value = null
}
defineExpose({
  showModal
})
onMounted(() => {
  modal.value = new Modal(addNewModal.value)
})

const imgSrc = ref(null)
const selectedImg = ref(null)
/**
   ＊ 新增照片並顯示預覽
   ＊ ＠param {Object} e - input change event
  */
const addImage = function (e) {
  isLoading.value = true
  let input = e.target
  selectedImg.value = e.target.files[0]

  // 預覽照片
  if (input.files) {
    let reader = new FileReader()
    reader.onload = (e) => {
      imgSrc.value = e.target.result
    }
    // this.image = input.files[0]
    reader.readAsDataURL(input.files[0])
    isLoading.value = false
  }
}

const modalDialog = ref(null)
const isModalSideShow = ref(false)
const showSideModal = function () {
  if (isModalSideShow.value === true) {
    uploadImage()
  } else {
    modalDialog.value.style.maxWidth = '1000px'
    isModalSideShow.value = true
  }
}

const backToPreviousStep = () => {
  if (isModalSideShow.value === true) {
    modalDialog.value.style.maxWidth = '700px'
    isModalSideShow.value = false
  }
  imgSrc.value = null
}

// 上傳圖片至firebase storage
let imageUrl = ''
const uploadImage = async () => {
  isLoading.value = true
  const file = selectedImg.value
  if (!file) {
    console.error('No file selected.')
    return
  }
  const storage = getStorage(firebaseApp)
  const fileRef = storageRef(storage, 'posts/' + file.name)
  try {
    //上傳照片至firebase storage
    await uploadBytes(fileRef, file)
    //取得上傳後的url
    imageUrl = await getDownloadURL(fileRef)
    console.log(imageUrl)
    if (imageUrl) {
      pushPostToFirebase()
    }
  } catch (error) {
    console.error('Error uploading image:', error)
  }
}

// 引入 useUserDataStore 取得userData
const userData = useUserDataStore()
const postCaption = ref('')
// post push firebase
const pushPostToFirebase = function () {
  //  post資料
  const postId = Date.now()
  const itemsRef = firebaseRef(db, 'postsData')
  const newPostData = {
    caption: postCaption.value,
    id: postId,
    isThumb: false,
    media_type: 'IMAGE',
    media_url: [imageUrl],
    permalink: '',
    timestamp: new Date().toISOString(),
    username: userData.userData.username
  }
  push(itemsRef, newPostData)
    .then(() => {
      console.log('Data successfully written to Firebase!')
      modal.value.hide()
      postCaption.value = ''
      isLoading.value = false
    })
    .catch((error) => {
      console.error('Error writing data to Firebase:', error)
    })
}
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="addNewModal"
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
          <h5 class="modal-title" id="exampleModalLabel">建立新貼文</h5>
          <!-- 用imgSrc是否有值判斷按鈕是否顯示 -->
          <button
            class="btn position-absolute end-0 mx-3 text-primary"
            v-if="imgSrc"
            @click="showSideModal"
          >
            下一步
          </button>
        </div>
        <div class="d-flex flex-sm-column flex-md-row">
          <!-- 尚未上傳圖片 -->
          <!-- 用imgSrc是否有值判斷圖片上傳區是否顯示 -->
          <div class="modal-body align-items-center p-5" v-if="!imgSrc">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <i class="bi bi-image pic-icon"></i>
              <div>將相片和影片拖曳到這裡</div>
              <label for="file-input" class="file-input-button btn btn-primary m-3"
                >從電腦選擇</label
              >
              <!-- 傳入change event -->
              <input
                type="file"
                id="file-input"
                accept="audio/*,video/*,image/*"
                @change="addImage($event)"
              />
            </div>
          </div>

          <!-- 顯示上傳之圖片 -->
          <!-- 用imgSrc是否有值判斷圖片上傳區是否顯示 -->
          <div class="modal-body d-flex flex-column align-items-center input-img-area p-0" v-else>
            <img :src="imgSrc" alt="" class="input-img" />
          </div>
          <!-- side Modal -->
          <div class="border-start p-2 w-100" v-if="isModalSideShow">
            <div class="d-flex align-self-center align-middle">
              <div class="rounded-circle user-pic">
                <!-- <img src="../assets/images/test.jpg" alt="" /> -->
              </div>
              <p class="align-middle my-auto ms-2 fw-bold">{{ userData.userData.username }}</p>
            </div>
            <textarea
              type="text"
              placeholder="撰寫說明文字......"
              class="postDescriptionInput py-2 w-100"
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
// .modal-dialog,
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
.postDescriptionInput {
  height: calc(100% - 40px);
  border: 0;
  resize: none;
  &:focus {
    outline: none;
  }
}
</style>
