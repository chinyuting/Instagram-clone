<script setup>
import Modal from 'bootstrap/js/dist/modal'
import { onMounted, ref, computed } from 'vue'
import { db, firebaseRef, onValue } from '../firebaseSetUp'

const modal = ref(null)
const storyModal = ref(null)
/**
 * 開啟modal 更新story計時 開始計時
 */
const showModal = function () {
  modal.value.show()
  initTimer()
  startTimer()
}
defineExpose({
  showModal
})
onMounted(() => {
  modal.value = new Modal(storyModal.value)
})

let storyStartTime = null
const storyProgress = ref(0)
/**
 * 初始story計時
 */
const initTimer = () => {
  storyProgress.value = 0
  storyStartTime = new Date()
}
/**
 * 開始story計時
 */
const countTime = ref(null)
const startTimer = function () {
  countTime.value = setInterval(() => {
    const newTime = new Date()
    const durationTime = storyContent.value[0].duration
    // duration時間到則關閉Modal
    if (newTime - storyStartTime >= durationTime) {
      hideModal()
    }
    // 計算story時長比例
    const percentage = Math.round(((newTime - storyStartTime) / durationTime) * 100)
    storyProgress.value = percentage
  }, 100)
}

// 時間進度條長度
const storyProgressWidth = computed(() => {
  return { width: storyProgress.value + '%' }
})

/**
 * 關閉Modal時重整限時時間
 */
const hideModal = function () {
  // 停止setInterval
  if (countTime.value) {
    clearInterval(countTime)
  }
  modal.value.hide()
}

// 從MainView prop 取得此story storyOwner資料
const props = defineProps({
  storyOwner: Object
})

// 從firebase取得story資料
const storyData = ref([])
onMounted(() => {
  const storyDataRef = firebaseRef(db, 'storyData')

  onValue(storyDataRef, (snapshot) => {
    const fetchedStories = []
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key
      const value = childSnapshot.val()
      fetchedStories.push({ key, ...value })
    })
    storyData.value = fetchedStories
  })
})

// 篩選出符合作者的story
const storyContent = computed(() => {
  return storyData.value.filter((story) => story.storyownerid === props.storyOwner.id)
})
</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade custom-modal"
    id="storyModal"
    tabindex="-1"
    aria-labelledby="storyModalLabel"
    aria-hidden="true"
    ref="storyModal"
  >
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div class="modal-content bg-transparent b-0">
        <div
          class="modal-body text-end story-modal-body"
          v-for="story in storyContent"
          :key="story.id"
        >
          <!-- 時間進度條 -->
          <div class="story-progress" style="height: 2px">
            <!-- style 設置時間進度條長度 -->
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="storyProgressWidth"
            ></div>
          </div>
          <div class="d-flex mt-2 justify-content-between align-items-center">
            <div class="rounded-circle user-pic">
              <img :src="storyOwner.user_media_url" alt="" />
            </div>
            <div class="text-light flex-grow-1 text-start ps-2">{{ story.username }}</div>
            <button
              type="button"
              class="btn-close btn-close-white position-relative"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click.prevent="hideModal"
            ></button>
          </div>
          <div class="rounded story-pic-area">
            <img :src="story.media_url" class="story-content-pic" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.user-pic {
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  object-fit: contain;
  position: relative;
  img {
    /* 圖片置中 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 150%;
  }
}
.story-progress {
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
