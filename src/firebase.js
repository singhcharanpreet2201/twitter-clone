import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLhL43jtonKW377qDxzeZQVorQjr-3kvs",
    authDomain: "twitter-clone-bd09e.firebaseapp.com",
    projectId: "twitter-clone-bd09e",
    storageBucket: "twitter-clone-bd09e.appspot.com",
    messagingSenderId: "439999877689",
    appId: "1:439999877689:web:2311faac23f8d102be33e8",
    measurementId: "G-16CF27MC7K"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;