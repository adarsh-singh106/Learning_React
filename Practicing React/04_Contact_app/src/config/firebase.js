// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ppeGHVmXv499FDP1LHZe-5jaiN5Wyzg",
  authDomain: "mini-contact-app-39de1.firebaseapp.com",
  projectId: "mini-contact-app-39de1",
  storageBucket: "mini-contact-app-39de1.firebasestorage.app",
  messagingSenderId: "1077892711414",
  appId: "1:1077892711414:web:12c944587778bc5441bdd7",
  measurementId: "G-87E5G8G48V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);