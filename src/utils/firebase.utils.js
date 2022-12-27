// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7E9GB1UVogXfr6Vabn4vGCWXgAVouhww",
  authDomain: "crown-clothing-db-3a853.firebaseapp.com",
  projectId: "crown-clothing-db-3a853",
  storageBucket: "crown-clothing-db-3a853.appspot.com",
  messagingSenderId: "25646220006",
  appId: "1:25646220006:web:9f97ddd6fdb9420b8c7127",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
