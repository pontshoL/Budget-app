// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBawQCik9Wys4HVmsOKzzI1lGLKfGUztk4",
  authDomain: "budget-app-90d57.firebaseapp.com",
  projectId: "budget-app-90d57",
  storageBucket: "budget-app-90d57.appspot.com",
  messagingSenderId: "725768185464",
  appId: "1:725768185464:web:168a0f745383ae7a8a2f8d",
  measurementId: "G-NB1SF5JE5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db};