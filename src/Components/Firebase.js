// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAhElM3ZVpnRP4RxizZTLr_Fr7klhLbH6o",
  authDomain: "cleaver-clone.firebaseapp.com",
  projectId: "cleaver-clone",
  storageBucket: "cleaver-clone.appspot.com",
  messagingSenderId: "643899270899",
  appId: "1:643899270899:web:5ec459989caf7a5fd4f986",
  measurementId: "G-VQTW54Q8XH"
};

// initializing the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth,db};

