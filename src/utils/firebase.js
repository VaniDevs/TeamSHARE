// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

export const liveVersion = '0.0.0'; 

var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDmFuD5PlK45F7hKwQR1Mvga6Y-3tkJai4",
    authDomain: "share-babygoround.firebaseapp.com",
    databaseURL: "https://share-babygoround.firebaseio.com",
    projectId: "share-babygoround",
    storageBucket: "share-babygoround.appspot.com",
    messagingSenderId: "460355103844"
  };


export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseEmailAuthProvider = firebase.auth.EmailAuthProvider;
export const firebaseDb = firebaseApp.database();
export const firebaseStorage = firebase.storage();
export const storageRef = firebaseStorage.ref();
