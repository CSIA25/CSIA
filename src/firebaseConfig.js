// Import the Firebase modules you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUBDYEgsmnL7LlSY5UUIr0QEMQHJGl3ug",
  authDomain: "aron-a191a.firebaseapp.com",
  projectId: "aron-a191a",
  storageBucket: "aron-a191a.appspot.com",
  messagingSenderId: "726973094506",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
