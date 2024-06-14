<script setup>
import Modal from 'bootstrap/js/dist/modal'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import qs from 'qs'

// getTokenModal 定義showModal function
const modal = ref(null)
const getTokenModal = ref(null)
const showModal = function () {
  modal.value.show()
}
// showModal開放父層使用
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
// 自定義axios
const instance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded' // Body 型態
  },
  transformRequest: [(data) => qs.stringify(data)] // 將 data (body 內容) 轉型
})
/**
   ＊ 取得code後 取得短期token 再取得長期token
  */
const getToken = () => {
  if (location.search) {
    // 取得code
    code = location.search.slice(6) // 取得網址參數並移除'#_''

    // 成功取得code則轉換為token
    // 補充else todo
    if (code) {
      getAccessToken()

      // code則轉換為token
    } else {
      console.error('Failed to get code from URL')
    }
  }
}

/**
   ＊ 取得短期token
  */
async function getAccessToken() {
  try {
    const response = await instance.post(
      'https://cors-anywhere.herokuapp.com/https://api.instagram.com/oauth/access_token',
      {
        client_id: '461541476203224',
        client_secret: client_secret.value,
        grant_type: 'authorization_code',
        redirect_uri: 'https://chinyuting.github.io/Instagram-Imitation/',
        code: code
      }
    )
    // 取得短期 token
    let access_token = response.data.access_token
    localStorage.setItem('user_id', response.data.user_id)
    // 取得長期token
    getLongLivedToken(access_token)
  } catch (error) {
    console.error('Error:', error)
  }
}

/**
 * 取得長期token
 * @param {String} access_token - 在getAccessToken取得的短期token
 */
async function getLongLivedToken(access_token) {
  // 取得長期token
  if (access_token) {
    axios
      .get(
        `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${client_secret.value}&access_token=${access_token}`
      )
      .then((res) => {
        const currentTime = Date.now()
        // 計算長期token到期時間(約60天) expires_in單位為分鐘 currentTime單位為毫秒
        const expireTimestamp = res.data.expires_in * 1000 + currentTime
        // 儲存長期token (long-lived-access-token) 至localStorage
        localStorage.setItem('long-lived-access-token', res.data.access_token)
        localStorage.setItem('access-token-expire-time', expireTimestamp.toString())
        // 關閉modal
        modal.value.hide()
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<template>
  <div
    class="modal fade"
    id="getTokenModal"
    tabindex="-1"
    aria-labelledby="getTokenModalLabel"
    aria-hidden="true"
    ref="getTokenModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="getTokenModal">請輸入密碼</h5>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text" id="clientSecret">密碼</span>
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
          <button type="button" class="btn btn-primary" @click.prevent="getToken">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
