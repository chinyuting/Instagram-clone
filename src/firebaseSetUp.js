import * as firebase from 'firebase/app'
import { getDatabase, ref, onValue, push, update } from 'firebase/database'
import { getStorage } from 'firebase/storage'




// firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp)
const storage = getStorage(firebaseApp)
export { firebaseApp, db, storage, ref, onValue, push, update }
