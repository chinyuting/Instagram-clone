<script setup>
import { onMounted } from 'vue'
import navComponent from '../components/navComponent.vue'
import { usePostDataStore } from '../stores/postDataListStore.js'
import { useUserDataStore } from '../stores/userDataStore.js'

// 引入 postDataStore 呼叫getData方法取得PostDataList並儲存
const postData = usePostDataStore()
postData.getPostData()

const userData = useUserDataStore()
userData.getUserData()
console.log(userData);

const getPost = function (id) {
  console.log(id)
}

// onMounted(() => {
//   console.log('userData.value', userData.value)
// })
</script>

<template>
  <div class="row mx-0">
    <navComponent />
    <main class="col m-0 border-start min-vh-100">
      <div class="profile mx-auto py-md-4">
        <div class="rounded-circle profile-pic m-1 flex-shrink-0 p-1">
          <!-- <img src="../assets/images/test.jpg" alt="" /> -->
        </div>
        <div>{{ userData.username }}</div>
      </div>

      <article class="row mx-auto border-top">
        <div class="mt-1 col-4 px-0 ps-1" v-for="(post, index) in postData.postData" :key="index">
          <div class="profile-post" @click="getPost(post.id)">
            <div class="post-pic position-absolute w-100 h-100">
              <img :src="post.media_url" alt="" v-if="post.media_type === 'IMAGE'" />
              <img :src="post.thumbnail_url" alt="" v-if="post.media_type === 'VIDEO'" />
            </div>
          </div>
        </div>
      </article>
      <button class="btn"></button>
    </main>
  </div>
</template>
<style lang="scss">
.profile-pic {
  height: 90px;
  width: 90px;
  overflow: hidden;
  object-fit: contain;
  position: relative;
  border: 3px solid transparent;
  background-clip: padding-box;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 150%;
  }
}

.profile,
article {
  width: 100%;
}

.profile-post {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
  transition: all 1s ease;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.post-pic {
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: gray;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
  }
  &:hover::before {
    opacity: 0.5; //hover改變透明度
  }
}

@media (min-width: 768px) {
  .profile-pic {
    height: 150px;
    width: 150px;
  }
  .profile,
  article {
    width: 80%;
  }
}
</style>
