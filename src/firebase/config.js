// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCX2OL2EF9Ca-E_CA5bcv2FIVZekeL32mQ",

  authDomain: "rararopa-f4c58.firebaseapp.com",

  databaseURL: "https://rararopa-f4c58-default-rtdb.firebaseio.com",

  projectId: "rararopa-f4c58",

  storageBucket: "rararopa-f4c58.appspot.com",

  messagingSenderId: "1077586975533",

  appId: "1:1077586975533:web:a2118ba414fc7ed56351a4",

  measurementId: "G-TKC2T37WQE",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)



