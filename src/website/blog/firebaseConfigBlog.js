import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import 'firebase/compat/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAGrHdfb9uovAH0Pu2GS0aRHx74mmTYM_k",
    authDomain: "sahara-blogs.firebaseapp.com",
    databaseURL: "https://sahara-blogs-default-rtdb.firebaseio.com",
    projectId: "sahara-blogs",
    storageBucket: "sahara-blogs.appspot.com",
    messagingSenderId: "442006654255",
    appId: "1:442006654255:web:233ad1dad76dbffceb25da"
  };
  firebase.initializeApp(firebaseConfig);

  export const auth = getAuth();
  
  export const dataRef = firebase.database();
  export default firebase;
  
