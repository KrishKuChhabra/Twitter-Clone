// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBhDEvmazyWfm545ePVHUXDSNRnFBwZl8I",
    authDomain: "twitter-clone-fe4de.firebaseapp.com",
    projectId: "twitter-clone-fe4de",
    storageBucket: "twitter-clone-fe4de.appspot.com",
    messagingSenderId: "675657953579",
    appId: "1:675657953579:web:28a60d0f0b2fef43ad956e",
    measurementId: "G-CQESF5RSFN"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)

  const db= firebaseApp.firestore();

  export default db;