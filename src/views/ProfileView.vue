<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { usePostDataStore } from '../stores/postDataListStore.js'
import { useUserDataStore } from '../stores/userDataStore.js'
import { db, firebaseRef, onValue } from '../firebaseSetUp'

import navComponent from '../components/navComponent.vue'
import profilePostModalComponent from '../components/profilePostModalComponent.vue'

/**
 * 引入 usePostDataStore 寫入postData
 */
const postData = usePostDataStore()

/**
 * 引入 useUserDataStore 寫入userData
 */
const userData = useUserDataStore()

/**
 * 異步執行userData中的getUserData 和 postData的getPostData
 */
const fetchData = async () => {
  await userData.getUserData()
  await postData.getPostData()
}

// 相同user的posts
const userPostsDataFromFirebase = ref([])
// 設定資料取得路徑
const postsDataRef = firebaseRef(db, 'postsData')
/**
 * 從firebase取得的userPostsDataFromFirebase
 */
onMounted(async () => {
  await fetchData()
  onValue(postsDataRef, (snapshot) => {
    const fetchedPosts = []
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key
      const value = childSnapshot.val()
      // 判斷username是否相同 篩選出當前使用者(userData.userData.username)的posts
      if (userData.userData.username === value.username) {
        fetchedPosts.push({ key, ...value })
      }
    })
    // 取得post存入postData
    userPostsDataFromFirebase.value = fetchedPosts
  })
})

// 合併firebase取得的userPostsDataFromFirebase 和 ig api取得的postsData
const mergedPostData = computed(() => {
  const combinedData = [...postData.postData, ...userPostsDataFromFirebase.value]
  // 以timestamp進行排序
  return combinedData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
})

/**
 * 開啟modal
 * @param {String} id - 滑動至指定post的post id
 */
const profilePostModal = ref(null)
const openPostId = ref('')

const openModal = function (id) {
  openPostId.value = id
  profilePostModal.value.showModal()
}
// 滑動至指定post
// watch(
//   () => openPostId,
//   async (newVal) => {
//     if (newVal) {
//       await nextTick()
//       console.log(newVal)
//       const element = document.getElementById(newVal)
//       console.log(element)
//       if (element) {
//         element.scrollIntoView()
//       }
//     }
//   }
// )
</script>

<template>
  <div class="row mx-0">
    <navComponent />
    <main class="col m-0 border-start min-vh-100">
      <div class="profile mx-auto py-md-4 d-flex">
        <div class="rounded-circle profile-pic m-1 flex-shrink-0 p-1">
          <img :src="userData.userData.media_url" alt="" />
        </div>
        <div class="align-self-center ms-5">
          <div class="d-flex my-1 align-self-center">
            <h4 class="userName p-2">{{ userData.userData.username }}</h4>
            <div>
              <button class="btn btn-light" type="button">編輯個人檔案</button>
            </div>
            <div class="p-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-gear-wide"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"
                />
              </svg>
            </div>
          </div>
          <ul class="my-1 d-flex list-unstyled align-self-center">
            <li class="media_count profile-data p-2">
              {{ mergedPostData.length }}<span>則貼文</span>
            </li>
            <li class="media_count profile-data p-2">0<span>位粉絲</span></li>
            <li class="media_count profile-data p-2">0<span>人追蹤中</span></li>
          </ul>
        </div>
      </div>

      <article class="row mx-auto border-top">
        <div class="mt-1 col-4 px-0 ps-1" v-for="(post, index) in mergedPostData" :key="index">
          <div class="profile-post" @click="openModal(post.id)">
            <div class="post-pic position-absolute w-100 h-100">
              <img
                :src="post.media_url"
                alt=""
                v-if="post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM'"
              />
              <img :src="post.thumbnail_url" alt="" v-if="post.media_type === 'VIDEO'" />
            </div>
          </div>
        </div>
      </article>
      <button class="btn"></button>
    </main>
  </div>
  <profilePostModalComponent
    :postId="openPostId"
    :mergedPostData="mergedPostData"
    ref="profilePostModal"
  />
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
    background-color: black;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
  }
  &:hover::before {
    opacity: 0.5; //hover改變透明度
  }
}

.profile-data {
  font-size: 17px;
}

.cursor-pointer {
  cursor: pointer;
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
