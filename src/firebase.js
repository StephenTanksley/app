import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/functions';
import 'firebase/auth';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyBFT5yhCTqcjuJB5BgmOcC52vD_gTmcqr4",
  authDomain: "cv19assist-dev.firebaseapp.com",
  databaseURL: "https://cv19assist-dev.firebaseio.com",
  projectId: "cv19assist-dev",
  storageBucket: "cv19assist-dev.appspot.com",
  messagingSenderId: "487252002912",
  appId: "1:487252002912:web:53e28d338ebd8788215b05",
  measurementId: "G-GB8SL2LGL0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// const db = firebase.firestore();
const firebaseAuth = firebase.auth();

// TODO: Is this still needed?
class FirebaseHelper {
  constructor() {
    this.API_URL = process.env.API_URL;
  }
};

const firebaseHelper = new FirebaseHelper();

export { firebase, firebaseAuth, firebaseHelper };