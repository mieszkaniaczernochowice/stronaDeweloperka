import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbvXjbGtB7L6qe2NZEPTEFDrI6HBTW62s",
  authDomain: "template-40133.firebaseapp.com",
  projectId: "template-40133",
  storageBucket: "template-40133.appspot.com",
  messagingSenderId: "872870662712",
  appId: "1:872870662712:web:2b5e6858e73a14e1558ccd",
  measurementId: "G-J1MYXLSL8V"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
