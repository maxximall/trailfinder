import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBWTPSy4nI-Y2XZ4q4QA8dVaBIaASCqfiA",
    authDomain: "trailfinder-55998.firebaseapp.com",
    databaseURL: "https://trailfinder-55998.firebaseio.com",
    projectId: "trailfinder-55998",
    storageBucket: "trailfinder-55998.appspot.com",
    messagingSenderId: "420611832546"
};
firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {googleAuthProvider, firebase as default}

