// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVAjy6fE5P3Al4OpG5cSdZFGwP5ykDbMw",
  authDomain: "simple-firebase-61766.firebaseapp.com",
  projectId: "simple-firebase-61766",
  storageBucket: "simple-firebase-61766.appspot.com",
  messagingSenderId: "935191969420",
  appId: "1:935191969420:web:95fcdf44f72f04e4b385a9",
  measurementId: "G-DSEYHKECB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);