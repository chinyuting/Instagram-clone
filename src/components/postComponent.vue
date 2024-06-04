<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { db, ref as firebaseRef, onValue, update } from '../firebaseSetUp'

// prop引入postDataList
const props = defineProps({
  postDataList: Array,
  postIdDirection: String
})

const postDataList = ref(props.postDataList)
const sortedPostList = computed(() => {
  // 複製原post data，以免修改
  const sortedPosts = [...postDataList.value]
  // 根据timestamp進行post排序（ISO 8601 格式）
  sortedPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

  // 返回排序后的post
  return sortedPosts
})

watch(
  () => props.postDataList,
  (newVal, oldVal) => {
    postDataList.value = newVal
  }
)

watch(
  () => props.postIdDirection,
  (newVal) => {
    if (newVal) {
      const element = document.getElementById(newVal)
      if (element) {
        console.log(element)
        console.log(newVal)
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
)

// 字數過長隱藏
// 存放caption顯示全文的post id
const expandedCaptions = ref(new Set())

// Method to toggle the full caption display
const toggleFullCaption = (postId) => {
  if (expandedCaptions.value.has(postId)) {
    expandedCaptions.value.delete(postId)
  } else {
    expandedCaptions.value.add(postId)
  }
}

// 確認caption是否顯示全文
const isCaptionExpanded = (postId) => {
  return expandedCaptions.value.has(postId)
}

// Method to truncate the caption
const truncatedCaption = (caption, postId) => {
  // 最長字數限制
  const maxLength = 20
  if(!caption) return
  return isCaptionExpanded(postId) ? caption : caption.slice(0, maxLength)
}

//判斷螢幕大小
const isLargeScreen = ref(window.innerWidth >= 768)
const updateScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 768
}
onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize)
})
//按讚
// const ThumbsUp = function (post) {
//   post.isThumb = !post.isThumb
//   const postRef = firebaseRef(db, `postsData/${post.key}`)

//   update(postRef, post)
//     .then(() => {
//       console.log('Data updated successfully!')
//     })
//     .catch((error) => {
//       console.error('Error updating data:', error)
//     })
// }

// 從firebase取得user資料
const userDataList = ref([])
onMounted(() => {
  const itemsRef = firebaseRef(db, 'userData')

  onValue(itemsRef, (snapshot) => {
    const fetchedItems = []
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key
      const value = childSnapshot.val()
      fetchedItems.push({ key, ...value })
    })
    // 取得userData存入userData
    userDataList.value = fetchedItems
  })
})

// 取得post owner pic
let matchedUser = false
const getPostOwnerPic = (post) => {
  for (const i in userDataList.value) {
    matchedUser = userDataList.value[i].id === post.postownerid
    if (matchedUser) {
      return userDataList.value[i].media_url
    }
  }
  return ''
}
// 留言
const messageInput = ref({})

const postMessage = (id) => {
  console.log(id)
  console.log(messageInput.value[id])
}

// 心形動畫顯示控制
const showHeartAnimation = ref({})

const ThumbsUp = function (post) {
  post.isThumb = !post.isThumb
  const postRef = firebaseRef(db, `postsData/${post.key}`)

  update(postRef, post)
    .then(() => {
      console.log('Data updated successfully!')
    })
    .catch((error) => {
      console.error('Error updating data:', error)
    })

  // 顯示心形動畫
  showHeartAnimation.value[post.id] = true
  setTimeout(() => {
    showHeartAnimation.value[post.id] = false
  }, 1000)
}
</script>

<template>
  <div
    class="card mt-3 post-card w-100 border-0"
    v-for="(post, index) in sortedPostList"
    :key="post.id"
    :id="post.id"
  >
    <div class="card-header bg-body px-1 d-flex align-items-center px-2 px-md-0">
      <div class="rounded-circle user-pic">
        <img :src="getPostOwnerPic(post)" alt="" />
      </div>

      <div class="ms-2 fw-bold">{{ post.username }}</div>
    </div>
    <div
      :id="'post' + post.id"
      class="carousel slide post-pic-area position-relative"
      @dblclick="ThumbsUp(post)"
    >
      <!-- 動畫愛心 -->
      <div class="position-absolute top-50 start-50 translate-middle w-25" v-if="showHeartAnimation[post.id]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-heart-fill text-danger"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
          />
        </svg>
      </div>
      <div class="carousel-indicators" v-if="post.media_type === 'CAROUSEL_ALBUM'">
        <div v-for="(img, key) in post.media_url.length" :key="key">
          <button
            :class="{ active: key === 0 }"
            type="button"
            :data-bs-target="'#post' + post.id"
            :data-bs-slide-to="key"
            :aria-current="key === 1"
            :aria-label="'Slide' + key"
          ></button>
        </div>
      </div>
      <!-- media_type判斷是否顯示多個圖片 -->
      <!-- media_type === 'IMAGE' -->
      <div
        class="carousel-inner position-relative"
        ref="postImg"
        v-if="post.media_type === 'IMAGE'"
      >
        <img :src="post.media_url" class="d-block w-100" alt="..." />
      </div>
      <!-- media_type === 'CAROUSEL_ALBUM' -->
      <div
        class="carousel-inner position-relative"
        ref="postImg"
        v-if="post.media_type === 'CAROUSEL_ALBUM'"
      >
        <div
          class="carousel-item"
          :class="{ active: key === 0 }"
          v-for="(img, key) in post.media_url"
          :key="key"
        >
          <img :src="img" class="d-block w-100" alt="..." />
        </div>
      </div>
      <!-- media_type === 'VIDEO' -->
      <div
        class="carousel-inner position-relative"
        ref="postImg"
        v-if="post.media_type === 'VIDEO'"
      >
        <video controls class="d-block w-100">
          <source :src="post.media_url" type="video/webm" />
        </video>
      </div>
      <!-- 僅多張照片時顯示左右按鈕 -->
      <button
        class="carousel-control-prev"
        type="button"
        :data-bs-target="'#post' + post.id"
        data-bs-slide="prev"
        v-if="post.media_type === 'CAROUSEL_ALBUM'"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        :data-bs-target="'#post' + post.id"
        data-bs-slide="next"
        v-if="post.media_type === 'CAROUSEL_ALBUM'"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="card-body px-sm-0 py-1 mb-1">
      <a href="" @click.prevent="ThumbsUp(post)">
        <i class="bi bi-heart icon-size text-danger" v-if="!post.isThumb"></i>
        <i class="bi bi-heart-fill icon-size text-danger" v-if="post.isThumb"></i>
      </a>
      <!-- <p class="card-text mb-2">{{ post.thumbNum }}個讚</p> -->
      <div v-if="post.caption">
        <span class="card-text d-inline fw-bold">{{ post.username }}</span>
        <!-- post caption僅顯示20字 -->
        <!-- 將caption傳入truncatedCaption判斷是否文字過長 -->
        <div class="card-text ms-2 d-inline">
          {{ truncatedCaption(post.caption, post.id) }}
        </div>
        <!-- 將caption傳入isCaptionExpanded判斷是否顯示'...更多' -->
        <a
          class="text-decoration-none text-secondary fs-6"
          v-if="!isCaptionExpanded(post.id) && post.caption.length > 20"
          @click.prevent="toggleFullCaption(post.id)"
          href="#"
        >
          ...更多
        </a>
      </div>
      <!-- 留言 -->
      <div class="position-relative">
        <input
          type="text"
          placeholder="留言..."
          class="w-100 border-0 my-1 py-1 postMessage"
          :id="'#message' + post.id"
          v-model="messageInput[post.id]"
        />
        <a
          type="button"
          class="position-absolute top-50 end-0 translate-middle-y text-decoration-none"
          v-if="messageInput[post.id]"
          @click.prevent="postMessage(post.id)"
          >發布</a
        >
      </div>
    </div>
    <!-- 最後一篇文後不需要分界線 -->
    <hr v-if="index != postDataList.length - 1 && isLargeScreen" class="m-0" />
  </div>
</template>

<style scoped lang="scss">
.post-card {
  max-width: 30rem;
  width: 100%;
  height: 100%;
  border-radius: 0;
}
.icon-size {
  font-size: 1.5rem;
}
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
.carousel-indicators [data-bs-target] {
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.post-pic-area {
  max-height: 480px;
  overflow: hidden;
  object-fit: contain;
  img {
    min-height: 480px;
    border-radius: 0;
    object-fit: cover;
  }
}
.postMessage {
  &:focus {
    outline: none;
  }
}
@media (min-width: 768px) {
  .post-card {
    border-radius: 0.375rem;
    border-bottom: solid 1px rgb(224, 224, 224);
  }
}
</style>
