<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const isLoading = ref(false)
const fullPage = ref(true)

const doAjax = () => {
  sLoading.value = true
  // simulate AJAX
  setTimeout(() => {
    this.isLoading = false
  }, 5000)
}
const onCancel = () => {
  console.log('User cancelled the loader.')
}
</script>
<template>
  <div class="vl-parent">
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />

    <label><input type="checkbox" v-model="fullPage" />Full page?</label>
    <button @click.prevent="doAjax">fetch Data</button>
  </div>
</template>
