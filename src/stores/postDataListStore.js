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
      isLoading.value = false
    })
    .catch((err) => {
      console.log(err)
    })
  }
  

  return { postData, getPostData }
})
