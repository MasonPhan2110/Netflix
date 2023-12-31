import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDh1wHCtcO8l0wzgQmD-iKJbQI3MTs5XFE",
  authDomain: "netflix-a37f9.firebaseapp.com",
  projectId: "netflix-a37f9",
  storageBucket: "netflix-a37f9.appspot.com",
  messagingSenderId: "904436676158",
  appId: "1:904436676158:web:e88580c0892de1987a436f",
  measurementId: "G-WXDRXR5436",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
