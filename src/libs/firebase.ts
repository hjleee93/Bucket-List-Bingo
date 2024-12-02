// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYvJXXNUUWSK3-t4prAt3O36ftIGE6bSA",
  authDomain: "bk-bingo.firebaseapp.com",
  projectId: "bk-bingo",
  storageBucket: "bk-bingo.firebasestorage.app",
  messagingSenderId: "542238966809",
  appId: "1:542238966809:web:4d820b3254b72f3dbe1688",
  measurementId: "G-QWZXNY26WX"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

let analytics;

if (firebaseApp.name && typeof window !== 'undefined') {
  analytics = getAnalytics(firebaseApp);
}