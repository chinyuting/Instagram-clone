import * as firebase from 'firebase/app'
import { getDatabase, ref as firebaseRef, onValue, push, update } from 'firebase/database'
import { getStorage } from 'firebase/storage'
import { getAuth, signInAnonymously } from 'firebase/auth'




// firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const db = getDatabase(firebaseApp)
const storage = getStorage(firebaseApp)
export { firebaseApp, db, storage, firebaseRef, onValue, push, update, auth, signInAnonymously }
