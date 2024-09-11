import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn-R6m5wz8gv1qKV6CTCoEXEFKK2QjpHw",
  authDomain: "chatapp-7ef3f.firebaseapp.com",
  projectId: "chatapp-7ef3f",
  storageBucket: "chatapp-7ef3f.appspot.com",
  messagingSenderId: "510852677484",
  appId: "1:510852677484:web:997e1aa56ee3fd17047d49",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app);
