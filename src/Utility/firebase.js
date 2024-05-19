// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// Authentication
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByWIai_gHQ85xLMg0htSTqmPVwGqPeiSw",
  authDomain: "clone-3bba0.firebaseapp.com",
  projectId: "clone-3bba0",
  storageBucket: "clone-3bba0.appspot.com",
  messagingSenderId: "439822815425",
  appId: "1:439822815425:web:6951f76d3afdf7b3758440"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()