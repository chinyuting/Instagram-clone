<script setup>
import { ref, computed, getCurrentInstance, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { db, ref as firebaseRef, onValue } from '../firebaseSetUp'
import axios from 'axios'
import qs from 'qs'

import navComponent from '../components/navComponent.vue'
import storyComponent from '../components/storyComponent.vue'
import postComponent from '../components/postComponent.vue'
import storyModalComponent from '../components/storyModalComponent.vue'
import getTokenModalComponent from '../components/getTokenModalComponent.vue'

// 取得story owner資料
// const { proxy } = getCurrentInstance()
// const storyOwnerData = ref([])
// proxy
//   .$axios(
//     {
//       url: '/getStoryOwner',
//       method: 'post'
//     },
//     { userId: '123' }
//   )
//   .then((res) => {
//     storyOwnerData.value = res.data.dataList
//   })

/**
  open story modal
  @param {Object} owner - story owner
*/
const storyModal = ref(null)
let storyOwner = ref({})
const openModal = function (owner) {
  storyOwner.value = owner
  storyModal.value.showModal()
}

// 從firebase取得story owner資料
const storyOwnerData = ref([])
onMounted(() => {
  const itemsRef = firebaseRef(db, 'storyOwner')

  onValue(itemsRef, (snapshot) => {
    const fetchedItems = []
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key
      const value = childSnapshot.val()
      fetchedItems.push({ key, ...value })
    })
    // 取得story owner存入storyOwnerData
    storyOwnerData.value = fetchedItems
  })
})

// story position預設值
let position = ref(0)
// story顯示的最左＆最右邊項目
let leftStoryItem = 1
let rightStoryItem = 7
// story移動數量
const moveNum = 3
// story寬度
const storyWidth = 78
// story左移 /右移按鈕顯示
let isShownToLeft = ref(false)
let isShownToRight = ref(true && storyOwnerData.value.length > rightStoryItem)

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
// 附加移位css到story
const story = computed(() => {
  return { transform: `translate(${position.value}px)` }
})

// mock取得post資料
// const postData = ref([])
// proxy
//   .$axios(
//     {
//       url: '/getPost',
//       method: 'post'
//     },
//     { userId: '123' }
//   )
//   .then((res) => {
//     postData.value = res.data.dataList
//   })

// 從firebase取得post資料
const postData = ref([])
onMounted(() => {
  const itemsRef = firebaseRef(db, 'postsData')

  onValue(itemsRef, (snapshot) => {
    const fetchedItems = []
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key
      const value = childSnapshot.val()
      fetchedItems.push({ key, ...value })
    })
    // 取得post存入postData
    postData.value = fetchedItems
  })
})

// IG api
// 轉址 api
const getTokenModal = ref(null)
const route = useRoute()
let code = location.search.slice(6)
const tokenExpireTime = localStorage.getItem('access-token-expire-time')
if (!tokenExpireTime || Date.now() >= parseInt(tokenExpireTime, 10) || !code) {
  window.location.href =
    'https://api.instagram.com/oauth/authorize?client_id=461541476203224&redirect_uri=https://chinyuting.github.io/Instagram-Imitation/&scope=user_profile,user_media&response_type=code'
  callApi()
}

// 取得ig api code 且轉換為token
// client_secret用輸入的
const client_secret = ref('')

const callApi = function () {
  getTokenModal.value.showModal()
}
</script>

<template>
  <div class="row mx-0">
    <navComponent />
    <main class="col m-0 border-start min-vh-100">
      <input type="text" v-model="client_secret" />
      <button type="btn" @click="callApi">api</button>

      <!-- stories -->
      <div class="stories position-relative w-md-75 mx-auto">
        <!-- 向左按鈕 傳入1 -->
        <button
          type="button"
          class="position-absolute top-50 start-0 translate-middle-y btn stories-btn"
          @click.prevent="positionCount(1)"
          v-if="isShownToLeft"
        >
          <i class="bi bi-arrow-left-circle-fill icon-size text-light"></i>
        </button>

        <!-- 向右按鈕 傳入-1 -->
        <button
          type="button"
          class="position-absolute top-50 end-0 translate-middle-y btn stories-btn"
          @click.prevent="positionCount(-1)"
          v-if="isShownToRight"
        >
          <i class="bi bi-arrow-right-circle-fill icon-size text-light"></i>
        </button>
        <div class="stories overflow-scroll flex-nowrap mt-md-2 position-relative">
          <div class="d-flex justify-content-start align-items-center">
            <storyComponent
              @click.prevent="openModal(owner)"
              class="storyComponent"
              v-for="owner in storyOwnerData"
              :key="owner.id"
              :ownerItem="owner"
              :style="story"
            />
          </div>
        </div>
      </div>

      <!-- 傳入storyOwner data -->
      <storyModalComponent ref="storyModal" :storyOwner="storyOwner" />
      <!-- post -->
      <div class="d-flex flex-column justify-content-center align-items-center mb-5">
        <postComponent :postDataList="postData" />
      </div>
    </main>
  </div>
  <getTokenModalComponent ref="getTokenModal" />
</template>

<style lang="scss">
.row main {
  padding: 0;
}
.stories-btn {
  z-index: 100;
}
.storyComponent {
  transition: all 0.7s ease;
}

.stories {
  &::-webkit-scrollbar {
    display: none;
  }
}

@media (min-width: 768px) {
  .stories {
    max-width: 546px;
  }
}
</style>
