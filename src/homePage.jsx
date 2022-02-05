// function HomePage() {
//   const [newName, setNewName] = useState("");
//   const [newAge, setNewAge] = useState(0);
//   const id = "1O5FSawiTc3bBwyIV7vZ";
//   const [projectName, setProjectNameRef] = useState([]);
//   const projectNameRef = collection(db, "users", id, "websideContents","homePage","projectName");
//   const projectName = await getDocs(db, "users", id, "websideContents","homePage","projectName");


//   const updateProjectName = async (id, projectName) => {
//     const userDoc = doc(db, "users", id, "websideContents","homePage","projectName");
//     const newFields = { projectName };
//     await updateDoc(userDoc, newFields);
//   };



// import { useState, useEffect } from "react";
// import "./App.css";

// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";

// import { db } from "./firebase-config";
// import { doc, getDoc } from "firebase/firestore";

//  const HomePage = async () =>
// {
//   const id = "1O5FSawiTc3bBwyIV7vZ";
//   const docRef = doc(db, "users", id, "websideContents","homePage","projectName");
//   const docSnap = await getDoc(docRef);
  
//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     console.log("No such document!");
//   }
// }
// export default HomePage;