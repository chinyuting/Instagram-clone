import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostDataStore = defineStore('postDataList', () => {
  const postData = ref([])
  const isLoading = ref(true)
  const error = ref(null)
  // function getPostData() {
  //   const access_token = localStorage.getItem('long-lived-access-token');
  //   axios
  //   .get(
  //     `https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${access_token}`
  //   )
  //   .then((res) => {
  //     console.log(res)
  //     postData.value = res.data.data
  //     console.log('post', postData.value)
  //     postData.value.forEach((post) => {
  //       console.log(post.media_type)
  //       if(post.media_type === 'CAROUSEL_ALBUM') {
  //         getMoreImg(post.id)
  //         // post.media_children = getMoreImg(post.id)
  //       }
  //     })
  //     isLoading.value = false
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }
  
  // function getMoreImg(id) {
  //   const access_token = localStorage.getItem('long-lived-access-token');
  //   axios
  //   .get(
  //     `https://graph.instagram.com/${id}/children?access_token=${access_token}`
  //   )
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }
  async function getPostData() {
    const access_token = localStorage.getItem('long-lived-access-token')
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${access_token}`
      )
      postData.value = res.data.data
      console.log('post', postData.value)
      await Promise.all(postData.value.map(async (post) => {
        if (post.media_type === 'CAROUSEL_ALBUM') {
          const mediaChildren = await getMoreImg(post.id)
          console.log(mediaChildren, 'mediaChildren');
          // post.media_children = mediaChildren
        }
      }))
    } catch (err) {
      console.error(err)
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  async function getMoreImg(id) {
    const access_token = localStorage.getItem('long-lived-access-token');
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://graph.instagram.com/${id}/children?access_token=${access_token}`
      );
      const mediaChildren = await Promise.all(
        res.data.data.map(async (child) => {
          console.log(child , 'child');
          return await getEachDetail(child.id);
        })
      );
      return mediaChildren;
    } catch (err) {
      console.error(err);
      error.value = err;
      return [];
    }
  }

  async function getEachDetail(id) {
    console.log(id, 'getEachDetail(id)');
    const access_token = localStorage.getItem('long-lived-access-token')
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://graph.instagram.com/${id}?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${access_token}`
      )
      return res.data.media_url
    } catch (err) {
      console.error(err)
      error.value = err
      return []
    }
  }

  return { postData, getPostData }
})
