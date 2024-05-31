<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { db, ref as firebaseRef, update } from '../firebaseSetUp'
import { useUserDataStore } from '../stores/userDataStore.js'

// 取得userData
const userData = useUserDataStore()
// prop引入postDataList
const props = defineProps({
  postDataList: Array
})

const postDataList = ref(props.postDataList)
const sortedPostList = computed(() => {
  // 复制原始的帖子数组，以免修改原始数组
  const sortedPosts = [...postDataList.value]
  // 根据timestamp進行post排序（假设时间戳是 ISO 8601 格式的字符串）
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
  const maxLength = 20
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
}
// 取得post owner pic
const getPostOwnerPic = (post) => {
  console.log(userData.value)
  console.log(post.postownerId)
  console.log(post.postownerId === userData.value.id)
  if (userData.value && post.postownerId === userData.forEach((user) => user.id)) {
    return userData.value.media_url
  }
  return ''
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
      <div class="carousel-indicators" v-if="post.media_url.length > 1">
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
      <div class="carousel-inner position-relative" ref="postImg">
        <div
          class="carousel-item"
          :class="{ active: key === 0 }"
          v-for="(img, key) in post.media_url"
          :key="key"
        >
          <img :src="img" class="d-block w-100" alt="..." />
        </div>
      </div>
      <!-- 僅多張照片時顯示左右按鈕 -->
      <button
        class="carousel-control-prev"
        type="button"
        :data-bs-target="'#post' + post.id"
        data-bs-slide="prev"
        v-if="post.media_url.length > 1"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        :data-bs-target="'#post' + post.id"
        data-bs-slide="next"
        v-if="post.media_url.length > 1"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="card-body px-md-0 py-1 mb-3">
      <a href="" @click.prevent="ThumbsUp(post)">
        <i class="bi bi-heart icon-size text-danger" v-if="!post.isThumb"></i>
        <i class="bi bi-heart-fill icon-size text-danger" v-if="post.isThumb"></i>
      </a>
      <!-- <p class="card-text mb-2">{{ post.thumbNum }}個讚</p> -->
      <div>
        <span class="card-text d-inline fw-bold">{{ post.username }}</span>
        <!-- post caption僅顯示20字 -->
        <!-- 將caption傳入truncatedCaption判斷是否文字過長 -->
        <div class="card-text ms-2 d-inline">
          {{ truncatedCaption(post.caption, post.id) }}
        </div>
        <!-- 將caption傳入truncatedCaption判斷是否顯示'...更多' -->
        <a
          class="text-decoration-none text-secondary fs-6"
          v-if="!isCaptionExpanded(post.id) && post.caption.length > 20"
          @click.prevent="toggleFullCaption(post.id)"
          href="#"
        >
          ...更多
        </a>
      </div>
    </div>
    <hr v-if="index != postDataList.length - 1 && isLargeScreen" />
  </div>
</template>

<style>
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

@media (min-width: 768px) {
  .post-card {
    border-radius: 0.375rem;
    border-bottom: solid 1px rgb(224, 224, 224);
  }
}
</style>
