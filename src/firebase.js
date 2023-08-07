// Import the functions you need from the SDKs you need
import { ref, onValue, set , update ,get ,equalTo ,child, orderByChild ,query,push ,remove} from 'firebase/database';
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage ,uploadBytes, getDownloadURL} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcf1zyt-e3B8wgSQnj8QilM9xytVtFisM",
  authDomain: "test-pi-bf72d.firebaseapp.com",
  databaseURL: "https://test-pi-bf72d-default-rtdb.firebaseio.com",
  projectId: "test-pi-bf72d",
  storageBucket: "test-pi-bf72d.appspot.com",
  messagingSenderId: "898421866428",
  appId: "1:898421866428:web:b189873fc99d25916a35b9",
  measurementId: "G-63PRDY9W6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, storage,ref, onValue, auth,child ,remove, set, update,uploadBytes, getDownloadURL, get , equalTo , orderByChild ,query ,push};