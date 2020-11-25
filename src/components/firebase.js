// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAi03HVIBLbsx-cqRUKzvGFKqisy0efXqY",
  authDomain: "todo-b3eb7.firebaseapp.com",
  databaseURL: "https://todo-b3eb7.firebaseio.com",
  projectId: "todo-b3eb7",
  storageBucket: "todo-b3eb7.appspot.com",
  messagingSenderId: "1064841455880",
  appId: "1:1064841455880:web:2b9d9567e756eb4eb0e4bd",
  measurementId: "G-QP4FR9M6V8",
});
const db = firebaseApp.firestore();
export default db;
