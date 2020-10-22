import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyA7p3IfWm9eoOAm2o4wVqGxughjRYGL0CY",
    authDomain: "talky-9dc03.firebaseapp.com",
    databaseURL: "https://talky-9dc03.firebaseio.com",
    projectId: "talky-9dc03",
    storageBucket: "talky-9dc03.appspot.com",
    messagingSenderId: "64254860098",
    appId: "1:64254860098:web:8e8e0641a4cd8f3b5e06db",
    measurementId: "G-QRMK0981K7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 
const database = firebase.database();

export default database;