import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyActsCP0e1uSRrdALTVMl_PTV45Vh8y09o",
    authDomain: "clone-e9d61.firebaseapp.com",
    databaseURL: "https://clone-e9d61.firebaseio.com",
    projectId: "clone-e9d61",
    storageBucket: "clone-e9d61.appspot.com",
    messagingSenderId: "970713470349",
    appId: "1:970713470349:web:8ff1655d3f22a6193899c4",
    measurementId: "G-SCS2T6MBWD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };