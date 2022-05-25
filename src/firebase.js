import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABI2xYvxVNOmYZCVGWrkaKKcToU41odNQ",
    authDomain: "linkedin-clone-7e562.firebaseapp.com",
    projectId: "linkedin-clone-7e562",
    storageBucket: "linkedin-clone-7e562.appspot.com",
    messagingSenderId: "365532443974",
    appId: "1:365532443974:web:bfbdca3af6fefcb3f26147"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };