import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDocs, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf4xPb5ylT0QvgYpTveEcQqqfUH8_uBRc",
  authDomain: "l2---group-14.firebaseapp.com",
  projectId: "l2---group-14",
  storageBucket: "l2---group-14.appspot.com",
  messagingSenderId: "902310180741",
  appId: "1:902310180741:web:807a36dfe8e4de575a76ec",
  measurementId: "G-LJT4CX2BVT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const activitiesCollection = collection(db, 'activities');


export { app as firebaseApp, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, db, activitiesCollection };


