import firebase from 'firebase/app'
import "firebase/storage"   
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA6g5mFlNAWA4_TRVOk3z0cUkkpyr47IkM",
    authDomain: "fir-8014e.firebaseapp.com",
    projectId: "fir-8014e",
    storageBucket: "fir-8014e.appspot.com",
    messagingSenderId: "558721811882",
    appId: "1:558721811882:web:24c5459d044428396297d3",
    measurementId: "G-0SPKCNVTR1"
  };
  
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage()

export  { storage,firebase as default} ;
// export  default firebase;