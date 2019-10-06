import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCtzH2wZbi--2AO3r7erCQlVXLkTAX5WWg",
  authDomain: "ecomm-57b85.firebaseapp.com",
  databaseURL: "https://ecomm-57b85.firebaseio.com",
  projectId: "ecomm-57b85",
  storageBucket: "",
  messagingSenderId: "852017599800",
  appId: "1:852017599800:web:26a02e6f1f21fb716d5dcd",
  measurementId: "G-HLB8BBEQ8W"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase