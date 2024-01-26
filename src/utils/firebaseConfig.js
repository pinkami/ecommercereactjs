// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "phone-store-77fa2.firebaseapp.com",
    projectId: "phone-store-77fa2",
    storageBucket: "phone-store-77fa2.appspot.com",
    messagingSenderId: "1023780300413",
    appId: "1:1023780300413:web:0fc41c8cd8a85546d17314"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);