import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm2GubalzDqXFb_kmuCqwaqrd4Dsy0yfI",
  authDomain: "sociale-934e0.firebaseapp.com",
  databaseURL: "https://sociale-934e0.firebaseio.com",
  projectId: "sociale-934e0",
  storageBucket: "sociale-934e0.appspot.com",
  messagingSenderId: "527584317113",
  appId: "1:527584317113:android:329fc4197fa63d71d2d568",
  measurementId: "G-2SCJW1Y4GQ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
