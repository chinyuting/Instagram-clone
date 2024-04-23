import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostDataStore = defineStore('postDataList', () => {
  const postData = ref([])
  const userData = ref({})

  function getUser() {
    const access_token = localStorage.getItem('access_token');
    axios
    .get(
      `https://graph.instagram.com/7089654107806386?fields=account_type,id,media_count,username&access_token=${access_token}`
    )
    .then((res) => {
      console.log(res)
      userData.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function getData() {
    const access_token = localStorage.getItem('long-lived-access-token');
    axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${access_token}`
    )
    .then((res) => {
      console.log(res)
      postData.value = res.data.data
      console.log(postData.value)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  

  return { postData, userData, getData, getUser }
})
