<script setup>
import Modal from 'bootstrap/js/dist/modal'
import { onMounted, ref, computed } from 'vue'

import postComponent from '../components/postComponent.vue'

const modal = ref(null)
const profilePostModal = ref(null)

// 開啟modal
const showModal = function () {
  modal.value.show()
}
// expose showModal
defineExpose({
  showModal
})
onMounted(() => {
  modal.value = new Modal(profilePostModal.value, {
    backdrop: 'static', // modal點擊backdrop不會自動關閉
    keyboard: false
  })
})

const props = defineProps({
  postId: String,
  mergedPostData: Array
})
// 監聽prop資料變化

watch(
  () => props.postId,
  (newVal) => {
    postId.value = newVal
  }
)
</script>

<template>
  <!-- Modal -->
  {{postId  }}
  <div
    class="modal fade custom-modal"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="profilePostModal"
  >
    <button
      type="button"
      class="btn-close btn-close-white position-absolute top-0 end-0 m-3"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <postComponent :postDataList="mergedPostData" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.progress {
  background-color: rgb(169, 169, 169);
}
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
