import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserDataStore = defineStore('userDataList', () => {
  const userData = ref(null)

  async function getUserData() {
    try {
      const access_token = localStorage.getItem('long-lived-access-token');
      const response = await axios.get(
        `https://graph.instagram.com/7089654107806386?fields=account_type,id,media_count,username&access_token=${access_token}`
      )
      userData.value = response.data
      console.log('User data:', userData.value)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
    // const access_token = localStorage.getItem('long-lived-access-token');
    // axios
    // .get(
    //   `https://graph.instagram.com/7089654107806386?fields=account_type,id,media_count,username&access_token=${access_token}`
    // )
    // .then((res) => {
    //   console.log(res)
    //   console.log(res.data)
    //   userData.value = res.data
    //   console.log('user', userData.value)
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }
  
  return { userData, getUserData }
})
