<script setup>
import { ref, computed, onMounted } from 'vue'
import { db, firebaseRef, onValue, auth, signInAnonymously } from '../firebaseSetUp'
import { useRoute } from 'vue-router'
import navComponent from '../components/navComponent.vue'
import storyComponent from '../components/storyComponent.vue'
import postComponent from '../components/postComponent.vue'
import storyModalComponent from '../components/storyModalComponent.vue'
import getTokenModalComponent from '../components/getTokenModalComponent.vue'
import { useUserDataStore } from '../stores/userDataStore.js'

// 定義是否登錄
const isAuthenticated = ref(false)

// 匿名登錄
onMounted(() => {
  signInAnonymously(auth)
    .then(() => {
      isAuthenticated.value = true
    })
    .catch((error) => {
      console.error('登錄失敗', error)
    })
})

// isLoading init
const isLoading = ref(false)

// stories
const storyModal = ref(null)
// 資料變動時prop到storyModalComponent
let storyOwner = ref({})
/**
  開啟story modal
  @param {Object} owner - 選擇story的story owner
*/
const openStoryModal = function (owner) {
  // 將owner資料存入storyOwner
  storyOwner.value = owner
  // 開啟storyModal
  storyModal.value.showModal()
}

const storyOwnerData = ref([])
/**
 * 從firebase取得story owner資料 存入storyOwnerData
 */
onMounted(() => {
  const storyOwnerRef = firebaseRef(db, 'storyOwner')

  onValue(storyOwnerRef, (snapshot) => {
    const fetchedStoryOwners = []
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key
      const value = childSnapshot.val()
      fetchedStoryOwners.push({ key, ...value })
    })
    // 取得story owner存入storyOwnerData
    storyOwnerData.value = fetchedStoryOwners
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
// story左移 /右移按鈕顯示判斷
let isShownToLeft = ref(false)
let isShownToRight = ref(true && storyOwnerData.value.length > rightStoryItem)

/**
 * 計算限時position 及往右往左按鈕顯示邏輯
 * @param {Num} n - 判斷往左(n = 1) 往右(n = -1)
 */
const countStoryPosition = function (n) {
  // 一共需要顯示幾個stroy頭像
  const storyLen = storyOwnerData.value.length
  // 點擊往右按鈕 但可移動數小於moveNum 或已到底
  if (storyLen - rightStoryItem < moveNum && n === -1) {
    // 計算story position 向右移動storyLen - rightStoryItem個story
    position.value += n * (storyLen - rightStoryItem) * storyWidth
    // 計算最左及最右story項目
    leftStoryItem += storyLen - rightStoryItem
    rightStoryItem += storyLen - rightStoryItem
  } // 點擊往左按鈕 但可移動數小於moveNum 或已到底
  else if (leftStoryItem - moveNum < 0 && n === 1) {
    // 計算story position 向左移動moveNum - leftStoryItem個story
    position.value += n * (moveNum - leftStoryItem) * storyWidth
    // 計算最左及最右story項目
    rightStoryItem += leftStoryItem - moveNum
    leftStoryItem += leftStoryItem - moveNum
  } else {
    // 計算story position 向左/右移動moveNum個story
    position.value += n * moveNum * storyWidth
    // 重新計算最左及最右story項目
    leftStoryItem += n * -moveNum
    rightStoryItem += n * -moveNum
  }
  // 向右想左按鈕是否顯示 若已到底則不顯示
  isShownToLeft = ref(leftStoryItem !== 1)
  isShownToRight = ref(rightStoryItem < storyLen)
}
// 附加移位css到story
const storyComponentStyle = computed(() => {
  return { transform: `translate(${position.value}px)` }
})

const postData = ref([])
/**
 * 從firebase取得post資料 存入postData
 */
onMounted(() => {
  // postsData讀取路徑
  const postsDataRef = firebaseRef(db, 'postsData')
  /**
   * 讀取並監聽firebase post資料
   */
  onValue(postsDataRef, (snapshot) => {
    const fetchedPosts = []
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key
      const value = childSnapshot.val()
      fetchedPosts.push({ key, ...value })
    })
    // 取得post存入postData
    postData.value = fetchedPosts
  })
})

// 確認IG api連結

const route = useRoute()
// 取得網址參數並移除'#_''
let code = location.search.slice(6)
// 從localStorage取得token過期時間
const tokenExpireTime = localStorage.getItem('access-token-expire-time')
// token未取得或過期判斷
if (!tokenExpireTime || Date.now() >= parseInt(tokenExpireTime, 10)) {
  // 已有code則執行openGetTokenModal 取得token
  if (code) {
    onMounted(() => {
      openGetTokenModal()
    })
  } else {
    // 未有code則ig api轉址
    window.location.href =
      'https://api.instagram.com/oauth/authorize?client_id=461541476203224&redirect_uri=https://chinyuting.github.io/Instagram-Imitation/&scope=user_profile,user_media&response_type=code'
  }
}

/**
 * 開啟getTokenModal取得token
 */
const getTokenModal = ref(null)
const openGetTokenModal = function () {
  getTokenModal.value.showModal()
}

// token已取得且未過期 初始user資料
if (tokenExpireTime && Date.now() < parseInt(tokenExpireTime, 10)) {
  onMounted(() => {
    initUserData()
  })
}
/**
 * 初始user資料
 */
const initUserData = () => {
  isLoading.value = true
  const userData = useUserDataStore()
  userData.getUserData()
  isLoading.value = false
}
</script>

<template>
  <div class="row mx-0">
    <navComponent />
    <main class="col m-0 border-start min-vh-100">
      <!-- stories -->
      <div class="stories position-relative w-md-75 mx-auto">
        <!-- story列表向左按鈕 點擊後story列表向左移 傳入1 -->
        <button
          type="button"
          class="position-absolute top-50 start-0 translate-middle-y btn stories-btn"
          @click.prevent="countStoryPosition(1)"
          v-if="isShownToLeft"
        >
          <i class="bi bi-arrow-left-circle-fill icon-size text-light"></i>
        </button>

        <!-- story列表向右按鈕 點擊後story列表向右移 傳入-1 -->
        <button
          type="button"
          class="position-absolute top-50 end-0 translate-middle-y btn stories-btn"
          @click.prevent="countStoryPosition(-1)"
          v-if="isShownToRight"
        >
          <i class="bi bi-arrow-right-circle-fill icon-size text-light"></i>
        </button>
        <div class="stories overflow-scroll flex-nowrap mt-md-2 position-relative">
          <div class="d-flex justify-content-start align-items-center">
            <storyComponent
              @click.prevent="openStoryModal(owner)"
              class="story-component"
              v-for="owner in storyOwnerData"
              :key="owner.id"
              :ownerItem="owner"
              :style="storyComponentStyle"
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
  <loading-overlay :active="isLoading" :is-full-page="true"></loading-overlay>
</template>

<style lang="scss">
.row main {
  padding: 0;
}
.stories-btn {
  z-index: 100;
}
.story-component {
  transition: all 0.7s ease;
}

.stories {
  &::-webkit-scrollbar {
    display: none;
  }
}
.icon-size {
  font-size: 1.3rem;
}

@media (min-width: 768px) {
  .stories {
    max-width: 546px;
  }
}
</style>
