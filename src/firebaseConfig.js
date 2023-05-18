import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_LyheRICL7mQzhv7NAPsoUUXv4nuan3M",
  authDomain: "react-coder-house-91306.firebaseapp.com",
  projectId: "react-coder-house-91306",
  storageBucket: "react-coder-house-91306.appspot.com",
  messagingSenderId: "867789588715",
  appId: "1:867789588715:web:67c748c8ed9a29aa7e56ae",
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
