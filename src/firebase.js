import react from 'react'
import firebase from 'firebase'


  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLGMgk7ePQQ3gJTfFm9jiKYEFdGsl0wWE",
    authDomain: "pwa-hilman.firebaseapp.com",
    databaseURL: "https://pwa-hilman.firebaseio.com",
    projectId: "pwa-hilman",
    storageBucket: "pwa-hilman.appspot.com",
    messagingSenderId: "770682615953",
    appId: "1:770682615953:web:00ab86888a655fc183a730"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


export default firebase;