<script setup>
import Modal from 'bootstrap/js/dist/modal'
import { onMounted, ref } from 'vue'

const modal = ref(null)
const addNewModal = ref(null)
// 開啟Modal時清空imgSrc欄位
const showModal = function () {
  modal.value.show()
  imgSrc.value = ''
  isModalSideShow.value = false
  modalDialog.value.style.maxWidth = '750px'
}
defineExpose({
  showModal
})
onMounted(() => {
  modal.value = new Modal(addNewModal.value)
})

const imgSrc = ref(null)
/** 
   ＊ 新增照片並顯示預覽
   ＊ ＠param {Object} e - input change event 
  */
const addImage = function (e) {
  let input = e.target
  // 預覽照片
  if (input.files) {
    let reader = new FileReader()
    reader.onload = (e) => {
      imgSrc.value = e.target.result
    }
    this.image = input.files[0]
    reader.readAsDataURL(input.files[0])
  }
}

const modalDialog = ref(null)
const isModalSideShow = ref(false)
const addNewImg = function () {
  modalDialog.value.style.maxWidth = '1000px'
  isModalSideShow.value = true
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
          <h5 class="modal-title" id="exampleModalLabel">建立新貼文</h5>
          <!-- 用imgSrc是否有值判斷按鈕是否顯示 -->
          <button
            class="btn position-absolute end-0 mx-3 text-primary"
            v-if="imgSrc"
            @click="addNewImg"
          >
            下一步
          </button>
        </div>
        <div class="d-flex">
          <div class="modal-body d-flex flex-column align-items-center p-5" v-if="!imgSrc">
            <!-- 用imgSrc是否有值判斷圖片上傳區是否顯示 -->
            <div class="d-flex flex-column align-items-center">
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
          <div class="modal-body d-flex flex-column align-items-center input-img-area p-0" v-else>
            <img :src="imgSrc" alt="" class="input-img" />
          </div>
          <div class="border-start p-2" v-if="isModalSideShow">
            <div class="d-flex align-self-center align-middle">
              <div class="rounded-circle user-pic">
                <!-- <img src="../assets/images/test.jpg" alt="" /> -->
              </div>
              <p class="align-middle my-auto ms-2 fw-bold">shelly</p>
            </div>
            <textarea
              type="text"
              placeholder="撰寫說明文字......"
              class="postDescriptionInput py-2"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
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
.modal-dialog {
  max-width: 750px;
}
.postDescriptionInput {
  height: calc(100% - 40px);
  border: 0;
  resize: none;
}
</style>
