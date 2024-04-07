// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPXosQsWgJjYiqKIOlAGvkPSNqQL5Kzsg",
  authDomain: "signup-form-c349c.firebaseapp.com",
  databaseURL: "https://signup-form-c349c-default-rtdb.firebaseio.com",
  projectId: "signup-form-c349c",
  storageBucket: "signup-form-c349c.appspot.com",
  messagingSenderId: "456655320036",
  appId: "1:456655320036:web:f8a7ae5096f9f29cef8df1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
console.log("logs", db);
