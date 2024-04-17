<script setup>
import { ref, computed, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import navComponent from '../components/navComponent.vue'
import storyComponent from '../components/storyComponent.vue'
import postComponent from '../components/postComponent.vue'
import storyModalComponent from '../components/storyModalComponent.vue'

// 取得story資料
const { proxy } = getCurrentInstance()
const storyOwnerData = ref([])
proxy
  .$axios(
    {
      url: '/getStoryOwner',
      method: 'post'
    },
    { userId: '123' }
  )
  .then((res) => {
    storyOwnerData.value = res.data.dataList
  })

const storyModal = ref(null)
let storyOwner = ref('')

/**
  open story modal
  @param {Object} owner - story owner
*/
const openModal = function (owner) {
  storyOwner.value = owner.storyOwnerId
  storyModal.value.showModal()
}

// 限時position預設值
let position = ref(0)
// 按鈕顯示
let isShownToLeft = ref(false)
let isShownToRight = ref(true)
// 限時顯示的最左＆最右邊項目
let leftStoryItem = 1
let rightStoryItem = 7
// 限時移動數量
const moveNum = 3
// 限時寬度
const storyWidth = 78

/**
 * 計算限時position 及往右往左按鈕顯示邏輯
 * @param {Num} n - 判斷往左(n = 1) 往右(n = -1)
 */
const positionCount = function (n) {
  const storyLen = storyOwnerData.value.length
  // 點擊往右按鈕 但到底
  if (storyLen - rightStoryItem < moveNum && n === -1) {
    position.value += n * (storyLen - rightStoryItem) * storyWidth
    leftStoryItem += storyLen - rightStoryItem
    rightStoryItem += storyLen - rightStoryItem
  } // 點擊往左按鈕 但到底
  else if (leftStoryItem - moveNum < 0 && n === 1) {
    position.value += n * (moveNum - leftStoryItem) * storyWidth
    rightStoryItem += leftStoryItem - moveNum
    leftStoryItem += leftStoryItem - moveNum
  } else {
    position.value += n * moveNum * storyWidth
    leftStoryItem += n * -moveNum
    rightStoryItem += n * -moveNum
  }
  isShownToLeft = ref(leftStoryItem !== 1)
  isShownToRight = ref(rightStoryItem < storyLen)
}
// 附加移位css到story(限時)
const story = computed(() => {
  return { transform: `translate(${position.value}px)` }
})

// 取得ig api code
let code = ''
const client_secret = ref('')

const route = useRoute()
const callApi = function () {
  if (location.search) {
    // 取得code
    code = location.search.slice(6)
    if (code) {
      axios
        .post('https://cors-anywhere.herokuapp.com/https://api.instagram.com/oauth/access_token', JSON.stringify({
          client_id: '461541476203224',
          client_secret: '${client_secret.value}',
          grant_type: 'authorization_code',
          redirect_uri: 'https://chinyuting.github.io/Instagram-Imitation/',
          code: `${code}`
        }))
        .then((res) => {
          console.log('response', res)
        })
        .catch((err) => {
          console.log('err', err)
        })
      // /igGetID/oauth/access_token
      // axios
      //   .post(
      //     `/igGetID/oauth/access_token`,
      //     {
      //       client_id: '461541476203224',
      //       client_secret: `${client_secret.value}`,
      //       grant_type: 'authorization_code',
      //       redirect_uri: 'https://chinyuting.github.io/Instagram-Imitation/',
      //       code: `${code}`
      //     },
      //     {
      //       headers: {
      //         'Access-Control-Allow-Origin': '*',
      //         'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      //         'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      //       }
      //     }
      //   )
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((error) => {
      //     console.warn(error)
      //   })
    }
  }
}
</script>

<template>
  <input type="text" v-model="client_secret" />
  <button type="btn" @click="callApi">api</button>
  <div class="row mx-0">
    <navComponent />
    <main class="col m-0 border-start min-vh-100">
      <!-- stories -->
      <div class="stories overflow-scroll w-md-75 mx-auto flex-nowrap mt-md-2 position-relative">
        <div class="d-flex justify-content-start align-items-center">
          <storyComponent
            @click.prevent="openModal(owner)"
            v-for="owner in storyOwnerData"
            :key="owner.storyOwnerId"
            :ownerItem="owner"
            :style="story"
          />
        </div>
        <!-- 向左按鈕 傳入1 -->
        <button
          type="button"
          class="position-absolute top-50 start-0 translate-middle-y btn"
          @click.prevent="positionCount(1)"
          v-if="isShownToLeft"
        >
          <i class="bi bi-arrow-left-circle-fill icon-size text-light"></i>
        </button>
        <!-- 向右按鈕 傳入-1 -->
        <button
          type="button"
          class="position-absolute top-50 end-0 translate-middle-y btn"
          @click.prevent="positionCount(-1)"
          v-if="isShownToRight"
        >
          <i class="bi bi-arrow-right-circle-fill icon-size text-light"></i>
        </button>
      </div>
      <!-- 傳入storyOwner data -->
      <storyModalComponent ref="storyModal" :storyOwnerId="storyOwner" />
      <!-- post -->
      <div class="d-flex flex-column justify-content-center align-items-center mb-5">
        <postComponent />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.row main {
  padding: 0;
}

@media (min-width: 768px) {
  .stories {
    max-width: 546px;
  }
}
</style>
