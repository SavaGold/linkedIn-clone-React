import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5r_CcmloD3Ia8-Q5kL6U2PHye_9LAymY",
    authDomain: "linkedin-lone.firebaseapp.com",
    projectId: "linkedin-lone",
    storageBucket: "linkedin-lone.appspot.com",
    messagingSenderId: "436774766334",
    appId: "1:436774766334:web:7ac9bb40c543e6b6b5c7af"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};