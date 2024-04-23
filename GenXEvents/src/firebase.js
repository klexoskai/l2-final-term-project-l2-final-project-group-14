
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged
} from "firebase/auth";
import { doc, getFirestore, setDoc, collection, getDocs, query } from "firebase/firestore";
import ActivitiesData from "./data.js";

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
const analytics = getAnalytics(app);
const firebaseAuth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const activitiesCollection = collection(db, 'activities');

// const addData = async () => {
//     try {
//         const data = ActivitiesData;
        
//         // Iterate over the data array and add each object as a document
//         for (const activity of data) {
//             const activityID = activity["Activity ID"];
//             const docRef = doc(activitiesCollection, activityID);
//             await setDoc(docRef, activity);
//         }

//         console.log("Data of activities has been added successfully!");
//     } catch (error) {
//         console.error("Error adding sample data: ", error);
//     }
// };

// addData();

const firebaseTools = { app, db, analytics, activitiesCollection, firebaseAuth, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,
    onAuthStateChanged };
export default firebaseTools;