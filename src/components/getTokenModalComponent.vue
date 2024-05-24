<script setup>
import Modal from 'bootstrap/js/dist/modal'
import { ref, onMounted } from 'vue'
const modal = ref(null)
const getTokenModal = ref(null)
const showModal = function () {
  modal.value.show()
}
defineExpose({
  showModal
})
onMounted(() => {
  modal.value = new Modal(getTokenModal.value, {
    backdrop: 'static', // modal點擊backdrop不會自動關閉
    keyboard: false
  })
})
const client_secret = ref('')

</script>

<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="getTokenModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">請輸入密碼</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">密碼</span>
            <input
              type="text"
              class="form-control"
              placeholder="client_secret"
              aria-label="client_secret"
              aria-describedby="basic-addon1"
              v-model="client_secret"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click.prevent="getToken">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
