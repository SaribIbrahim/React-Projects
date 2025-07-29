// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHwU_sQFo6_a05lji1hppfuhQtTTXVR70",
  authDomain: "vite-contact-6d62c.firebaseapp.com",
  projectId: "vite-contact-6d62c",
  storageBucket: "vite-contact-6d62c.firebasestorage.app",
  messagingSenderId: "583994252092",
  appId: "1:583994252092:web:f0f2abe152b83e2d415c39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)