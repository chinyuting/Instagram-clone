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
  modal.value = new Modal(getTokenModal.value, {
    backdrop: 'static', // modal點擊backdrop不會自動關閉
    keyboard: false
  })
})

const props = defineProps({
  postId: String,
  mergedPostData: Array
})
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
    
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ postId }}
          <postComponent :postDataList="mergedPostData"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
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
