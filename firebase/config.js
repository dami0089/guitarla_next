// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQN9QW4IV-fq_rOuQfN4YJ8t0HPVxKIZ0",
  authDomain: "guitarla-firebase.firebaseapp.com",
  projectId: "guitarla-firebase",
  storageBucket: "guitarla-firebase.appspot.com",
  messagingSenderId: "987586514463",
  appId: "1:987586514463:web:38f7b21cea4feb194fcf2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
