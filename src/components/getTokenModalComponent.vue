<script setup>
import Modal from 'bootstrap/js/dist/modal'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import qs from 'qs'

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
let code = ''
const getToken = () => {
  if (location.search) {
    // 取得code
    code = location.search.slice(6) // 取得網址參數並移除'#_''

    // 成功取得code則轉換為token
    if (code) {
      const instance = axios.create({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // Body型態
        },
        transformRequest: [(data) => qs.stringify(data)] // 將data(body內容)轉型
      })

      // code則轉換為token
      async function getLongLivedToken() {
        try {
          const response = await instance.post(
            'https://cors-anywhere.herokuapp.com/https://api.instagram.com/oauth/access_token',
            {
              client_id: '461541476203224',
              client_secret: `${client_secret.value}`,
              grant_type: 'authorization_code',
              redirect_uri: 'https://chinyuting.github.io/Instagram-Imitation/',
              code: `${code}`
            }
          )
          console.log(response.data)
          // 取得短期token
          let access_token = response.data.access_token
          localStorage.setItem('user_id', response.data.user_id)

          // 取得長期token
          if (access_token) {
            axios
              .get(
                `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${client_secret.value}&access_token=${access_token}`
              )
              .then((res) => {
                console.log(res)
                const timeNow = Date.now()
                const expireTimestamp = res.data.expires_in * 1000 + timeNow
                console.log(expireTimestamp, 'expireTimestamp ')
                // 儲存長期token (long-lived-access-token) 至localStorage
                localStorage.setItem('long-lived-access-token', res.data.access_token)
                localStorage.setItem('access-token-expire-time', expireTimestamp.toString())
                modal.value.hide()
              })
              .catch((err) => {
                console.log(err)
              })
          }
        } catch (error) {
          console.error('Error:', error)
        }
      }
      getLongLivedToken()
    }
  }
}
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
          <!-- <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button> -->
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
          <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
          <button type="button" class="btn btn-primary" @click.prevent="getToken">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
