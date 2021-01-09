import { firebase } from "@firebase/app";
import "firebase/auth";

import "firebase/firestore";
const config = {
  apiKey: "AIzaSyBlelbbDBwmUW1Anv_jZB3h87DMQEckedg",
  authDomain: "to-do-list-21447.firebaseapp.com",
  databaseURL: "https://to-do-list-21447.firebaseio.com",
  projectId: "to-do-list-21447",
  storageBucket: "to-do-list-21447.appspot.com",
  messagingSenderId: "159022223313",
  appId: "1:159022223313:web:a0913c607ff4e78311daf0",
  measurementId: "G-DEHHDNRXCL",
};

firebase.initializeApp(config);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const todosCollection = db.collection("todos");
const usersCollection = db.collection("users");

const projectsCollection = db.collection("project");

// export utils/refs
export { db, auth, usersCollection, todosCollection, projectsCollection };
