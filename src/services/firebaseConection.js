import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyCi8ytmmTzmdk5FZ8cKRsUcI3MuLxRNxOw",
    authDomain: "sistema-51ea9.firebaseapp.com",
    projectId: "sistema-51ea9",
    storageBucket: "sistema-51ea9.appspot.com",
    messagingSenderId: "64661688960",
    appId: "1:64661688960:web:ce9d9b0be8822a4e67cc65",
    measurementId: "G-B75TCTWS8G"
  };
  

  if(!firebase.app.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase