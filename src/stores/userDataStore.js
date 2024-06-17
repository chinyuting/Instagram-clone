import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { db, firebaseRef, onValue, push, firebaseApp } from '../firebaseSetUp'

// 定義pinia store useUserDataStore
export const useUserDataStore = defineStore('userDataList', () => {
  // 定義state userData {Array}
  const userData = ref(null)

  async function getUserData() {
    try {
      const access_token = localStorage.getItem('long-lived-access-token');
      const user_id = localStorage.getItem('user_id');
      if (!access_token || !user_id) {
        throw new Error('Access token or user ID is missing.')
      }

      const response = await axios.get(
        `https://graph.instagram.com/${user_id}?fields=account_type,id,media_count,username&access_token=${access_token}`
      )
      userData.value = response.data
      getUserDataFromFirebase(response.data.id)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  async function getUserDataFromFirebase(userId) {
    const itemsRef = firebaseRef(db, 'userData')
  
    onValue(itemsRef, async (snapshot) => {
      const fetchedItems = []
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key
        const value = childSnapshot.val()
        fetchedItems.push({ key, ...value })
      })

      const userDataFromFirebase = fetchedItems.find(item => item.id === userId)
      if (!userDataFromFirebase) {
        await addNewUserData(userId)
      }
      userData.value = { ...userData.value, ...userDataFromFirebase }
    })
  }

  async function addNewUserData(userId) {
    const itemsRef = firebaseRef(db, 'userData')
    if (!userData.value) {
      console.error('User data is null.')
      return
    }
    const newUserData = {
      id: userId.toString(),
      media_url:'https://firebasestorage.googleapis.com/v0/b/instagram-imitation-180e8.appspot.com/o/user%2Fkarsten-winegeart-NE0XGVKTmcA-unsplash.jpg?alt=media&token=9f250d7f-e2e5-46fa-bad9-bcae3001951f',
      username: userData.value.username,
    }
    try {
      await push(itemsRef, newUserData)
      console.log('Data successfully written to Firebase!')
    } catch (error) {
      console.error('Error writing data to Firebase:', error)
    }
  }
  return { userData, getUserData }
})
