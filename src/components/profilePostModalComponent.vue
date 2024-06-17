<script setup>
import Modal from 'bootstrap/js/dist/modal'
import { onMounted, ref, watch, nextTick } from 'vue'

import postComponent from '../components/postComponent.vue'

const modal = ref(null)
const profilePostModal = ref(null)

/**
 * 開啟modal
 */
const showModal = function () {
  modal.value.show()
}
// showModal開放父層使用
defineExpose({
  showModal
})
onMounted(() => {
  modal.value = new Modal(profilePostModal.value)
})

// 從ProfileView prop 取得postId 和post資料
const props = defineProps({
  postId: String,
  postsData: Array
})

const postId = ref(null)
// 監聽prop資料變化
watch(
  () => props.postId,
  (newVal) => {
    postId.value = newVal
  }
)

// watch監聽postIdDirection scroll到指定element
// watch(
//   () => props.postId,
//   async (newVal) => {
//     if (newVal) {
//       await nextTick() // Wait for the DOM to update
//       console.log(newVal)
//       const element = document.getElementById(newVal)
//       console.log(element)
//       if (element) {
//         element.scrollIntoView()
//       }
//     }
//   }
// )
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade custom-modal"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="profilePostModal"
  >
    <!-- 關閉按鈕放在modal-dialog外 -->
    <button
      type="button"
      class="btn-close btn-close-white position-absolute top-0 end-0 m-3"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
          <!-- 引入postComponent -->
          <postComponent :postDataList="postsData" :postIdDirection="postId" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.story-pic-area {
  width: 100%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.story-content-pic {
  z-index: -5;
  height: 100%;
}
.modal-backdrop {
  opacity: 1;
}
</style>
