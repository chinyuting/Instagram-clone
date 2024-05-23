import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { db, ref as firebaseRef, onValue } from '../firebaseSetUp'

export const useUserDataStore = defineStore('userDataList', () => {
  const userData = ref(null)

  async function getUserData() {
    try {
      const access_token = localStorage.getItem('long-lived-access-token');
      const response = await axios.get(
        `https://graph.instagram.com/7089654107806386?fields=account_type,id,media_count,username&access_token=${access_token}`
      )
      userData.value = response.data
      getUserDataFromFirebase(response.data.id)
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

  async function getUserDataFromFirebase(userId) {
    const itemsRef = firebaseRef(db, 'userData')
  
    onValue(itemsRef, (snapshot) => {
      const fetchedItems = []
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key
        const value = childSnapshot.val()
        fetchedItems.push({ key, ...value })
      })

      const userDataFromFirebase = fetchedItems.find(item => item.id === userId)
      if (userDataFromFirebase) {
        // 合并用户数据和来自 Firebase 的数据
        userData.value = { ...userData.value, ...userDataFromFirebase }
        console.log(userData.value)
      }
    })
  }
  return { userData, getUserData }
})
