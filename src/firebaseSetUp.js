import * as firebase from 'firebase/app'
import { getDatabase, ref, onValue, push, update } from 'firebase/database'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'



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
const storage = getStorage(firebaseApp)
export { firebaseApp, db, storage, ref, onValue, push, update, auth }
