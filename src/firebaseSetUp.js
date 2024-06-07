import * as firebase from 'firebase/app'
import { ref, onMounted } from 'vue'
import { getDatabase, ref as firebaseRef, onValue, push, update } from 'firebase/database'
import { getStorage } from 'firebase/storage'
import { getAuth, signInAnonymously } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyD1bUd4QHmDnXtuA1SZgvxiaRcmuEVLpWo",
  authDomain: "instagram-imitation-180e8.firebaseapp.com",
  databaseURL: "https://instagram-imitation-180e8-default-rtdb.firebaseio.com",
  projectId: "instagram-imitation-180e8",
  storageBucket: "instagram-imitation-180e8.appspot.com",
  messagingSenderId: "266282768545",
  appId: "1:266282768545:web:07dbf92d25e2a93b3078e0"
};
// firebase sign in

// firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const db = getDatabase(firebaseApp)

const isAuthenticated = ref(false)

onMounted(() => {
  signInAnonymously(auth)
    .then(() => {
      console.log('User signed in anonymously')
      isAuthenticated.value = true
    })
    .catch((error) => {
      console.error('Error signing in anonymously:', error)
    })
})

const storage = getStorage(firebaseApp)
export { firebaseApp, db, storage, firebaseRef, onValue, push, update, auth }
