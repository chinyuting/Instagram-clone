<script setup>
import { ref, getCurrentInstance, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  postDataList: Array
})

// 字數過長隱藏
const readMoreActivated = ref(false)
const activateReadMore = function (id) {
  readMoreActivated.value = true
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
</script>

<template>
  <div
    class="card mt-3 post-card w-100 border-0"
    v-for="(post, index) in postDataList"
    :key="post.Id"
    :id="post.Id"
  >
    <div class="card-header bg-body px-1 d-flex align-items-center px-2 px-md-0">
      <div class="rounded-circle user-pic">
        <!-- <img :src="post.postOwnerPic" alt="" /> -->
      </div>

      <div class="ms-2 fw-bold">{{ post.username }}</div>
    </div>
    <div :id="'post' + post.Id" class="carousel slide post-pic-area position-relative">
      <div class="carousel-indicators" v-if="post.media_url.length > 1">
        <div v-for="(img, key) in post.media_url.length" :key="key">
          <button
            :class="{ active: key === 0 }"
            type="button"
            :data-bs-target="'#post' + post.Id"
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
        :data-bs-target="'#post' + post.Id"
        data-bs-slide="prev"
        v-if="post.media_url.length > 1"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        :data-bs-target="'#post' + post.Id"
        data-bs-slide="next"
        v-if="post.media_url.length > 1"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="card-body px-md-0 py-1 mb-3">
      <a href="">
        <i
          class="bi bi-heart icon-size text-danger"
          v-if="!post.isThumb"
          @click.prevent="post.isThumb = true"
        ></i>
        <i
          class="bi bi-heart-fill icon-size text-danger"
          v-if="post.isThumb"
          @click.prevent="post.isThumb = false"
        ></i>
      </a>
      <!-- <p class="card-text mb-2">{{ post.thumbNum }}個讚</p> -->
      <div>
        <span class="card-text d-inline fw-bold">{{ post.username }}</span>
        <!-- post description僅顯示20字 -->
        <!-- 用readMoreActivated值判斷是否顯示"更多" -->
        <div v-if="!readMoreActivated" class="card-text ms-2 d-inline">
          {{ post.caption.slice(0, 20) }}...
        </div>
        <a
          class="text-decoration-none text-secondary fs-6"
          v-if="!readMoreActivated"
          @click.prevent="activateReadMore(post.Id)"
          href="#"
        >
          更多
        </a>
        <div v-if="readMoreActivated" class="card-text ms-2 d-inline">{{ post.caption }}</div>
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
