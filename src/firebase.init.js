// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFhhEVtQ3-mfBeldnhHVLAKjWj_E507cU",
  authDomain: "chartered-accountant-aif.firebaseapp.com",
  projectId: "chartered-accountant-aif",
  storageBucket: "chartered-accountant-aif.appspot.com",
  messagingSenderId: "233729466175",
  appId: "1:233729466175:web:9e5347052bad8bbaee3d8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
