import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostDataStore = defineStore('postDataList', () => {
  const postData = ref([])


  function getPostData() {
    const isLoading = ref(true)
    const access_token = localStorage.getItem('long-lived-access-token');
    axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${access_token}`
    )
    .then((res) => {
      console.log(res)
      postData.value = res.data.data
      console.log('post', postData.value)
      postData.value.forEach((post) => console.log(post))
      isLoading.value = false
    })
    .catch((err) => {
      console.log(err)
    })
  }
  function getMoreImg(id) {
    const access_token = localStorage.getItem('long-lived-access-token');
    axios
    .get(
      `https://graph.instagram.com/${id}/children?access_token=${access_token}`
    )
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return { postData, getPostData }
})
