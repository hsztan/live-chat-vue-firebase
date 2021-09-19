// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCq6PuwuZVuvrwMqyiGpcaox2wdGkYrgdA',
  authDomain: 'vue-firebase-sites-peluso.firebaseapp.com',
  projectId: 'vue-firebase-sites-peluso',
  storageBucket: 'vue-firebase-sites-peluso.appspot.com',
  messagingSenderId: '550483390363',
  appId: '1:550483390363:web:322cf90a009c8b708dbb3e',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default { app }
