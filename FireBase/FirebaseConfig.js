import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,FacebookAuthProvider  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAprLmIC6ysOZikwht8Dg6fhl32lfr_m-Y",
    authDomain: "testingfirebase-b366a.firebaseapp.com",
    projectId: "testingfirebase-b366a",
    storageBucket: "testingfirebase-b366a.appspot.com",
    messagingSenderId: "695758536770",
    appId: "1:695758536770:web:debdc0b02079f45eaaaddb",
    measurementId: "G-ENS4911NJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const provider1 = new FacebookAuthProvider();