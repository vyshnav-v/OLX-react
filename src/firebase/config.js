import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAC9zjXmXTj321jOs93UY2w0G3jE4GZiuw',
  authDomain: 'olx-clone-74c2e.firebaseapp.com',
  projectId: 'olx-clone-74c2e',
  storageBucket: 'olx-clone-74c2e.appspot.com',
  messagingSenderId: '281025233787',
  appId: '1:281025233787:web:874a27b3864734116933de',
  measurementId: 'G-TSRXFZ5VV7',
};


export  default firebase.initializeApp(firebaseConfig)