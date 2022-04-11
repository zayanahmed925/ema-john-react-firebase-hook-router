// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDE4gX59z23M7gu4O6gGLVPF_38r1LnToI",
    authDomain: "ema-john-simple-fdf19.firebaseapp.com",
    projectId: "ema-john-simple-fdf19",
    storageBucket: "ema-john-simple-fdf19.appspot.com",
    messagingSenderId: "442481426100",
    appId: "1:442481426100:web:82c0ba6adb8e7721d4e1e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;