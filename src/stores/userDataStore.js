import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { db, ref as firebaseRef, onValue, push, firebaseApp } from '../firebaseSetUp'

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
    const newUserData = {
      id: userId,
      media_url:'https://firebasestorage.googleapis.com/v0/b/instagram-imitation-180e8.appspot.com/o/user%2Fprofile.jpg?alt=media&token=a0c4cd44-c560-4a99-9a2a-c67a5b69df73',
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
