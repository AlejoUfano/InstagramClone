import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOqHNujXECpKrJ96SImqRzIm3M9ijwCv0",
    authDomain: "instagramclone-53607.firebaseapp.com",
    projectId: "instagramclone-53607",
    storageBucket: "instagramclone-53607.appspot.com",
    messagingSenderId: "491209300156",
    appId: "1:491209300156:web:d881dceeb530cc30f198b9",
    measurementId: "G-DXNXS5EFKR"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
