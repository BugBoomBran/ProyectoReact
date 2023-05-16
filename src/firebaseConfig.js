import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkelWwU4Wm3GVXoSsP5SAy3GHXhtHNsDI",
  authDomain: "react-coder-house-6a960.firebaseapp.com",
  projectId: "react-coder-house-6a960",
  storageBucket: "react-coder-house-6a960.appspot.com",
  messagingSenderId: "857816019804",
  appId: "1:857816019804:web:f7aa0f6739fc5564524799",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
