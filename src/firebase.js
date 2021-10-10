import firebase from 'firebase/compat/app' // Must use v9
import 'firebase/compat/auth' // used v9
import 'firebase/storage'
import 'firebase/database'
import 'firebase/compat/firestore' //used v9



// Your web app's Firebase configuration
/*
Don't forget to sanitize before github push!!
*/
const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "photo-social-media.firebaseapp.com",
  projectId: "photo-social-media",
  storageBucket: "APP_BUCKET",
  messagingSenderId: "SENDERID",
  appId: "APPID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider}
