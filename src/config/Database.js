import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDkQuw1U7gMx7o8GhIhJOpUw4nE6eHP0Zs",
    authDomain: "farmer-6a64a.firebaseapp.com",
    databaseURL: "https://farmer-6a64a.firebaseio.com",
    projectId: "farmer-6a64a",
    storageBucket: "farmer-6a64a.appspot.com",
    messagingSenderId: "348717835238",
    appId: "1:348717835238:web:79982ef486f528d1"
};

let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();