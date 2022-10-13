// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-rLRT3k9XdkpjU02IcPTXusXV8z9bFTE",
  authDomain: "charterd-accountant.firebaseapp.com",
  projectId: "charterd-accountant",
  storageBucket: "charterd-accountant.appspot.com",
  messagingSenderId: "307380546646",
  appId: "1:307380546646:web:383a108cc22bad600a5ff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
