import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserDataStore = defineStore('UserDataList', () => {
  const userData = ref({})

  function getUserData() {
    const access_token = localStorage.getItem('long-lived-access-token');
    axios
    .get(
      `https://graph.instagram.com/7089654107806386?fields=account_type,id,media_count,username&access_token=${access_token}`
    )
    .then((res) => {
      console.log(res)
      userData.value = res.data
      console.log('user', userData.value)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  return { userData, getUserData }
})
