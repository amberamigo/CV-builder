import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCySGLD4lYgXJ9Wrw3vw3R6pUiA7brgNtI",
    authDomain: "resume-maker-4cf9b.firebaseapp.com",
    databaseURL: "https://resume-maker-4cf9b.firebaseio.com",
    projectId: "resume-maker-4cf9b",
    storageBucket: "resume-maker-4cf9b.appspot.com",
    messagingSenderId: "483601724025",
    appId: "1:483601724025:web:1f181dc5c8097f3c971aa8"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

//Firebase Configuration For Project