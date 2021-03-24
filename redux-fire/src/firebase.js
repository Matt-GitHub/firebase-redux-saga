import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCspLV2zI-J2isMPMoL0zuFkQeU4bX6tSk",
  authDomain: "fir-redux-saga-7c0ac.firebaseapp.com",
  databaseURL: "https://fir-redux-saga-7c0ac-default-rtdb.firebaseio.com",
  projectId: "fir-redux-saga-7c0ac",
  storageBucket: "fir-redux-saga-7c0ac.appspot.com",
  messagingSenderId: "72383636043",
  appId: "1:72383636043:web:d23d02ea5507db494963ce"
};

firebase.initializeApp(firebaseConfig);

export const dbRef = firebase.database().ref();
export const userRef = dbRef.child("users");
