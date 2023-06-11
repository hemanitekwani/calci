


// Initialize Firebase



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Rhiim9TBbGleiYMXmps8Ia7GtmbNS1Q",
  authDomain: "mypractice-a0be0.firebaseapp.com",
  projectId: "mypractice-a0be0",
  storageBucket: "mypractice-a0be0.appspot.com",
  messagingSenderId: "461296518253",
  appId: "1:461296518253:web:0e3eb693f49da191a7ab64",
  measurementId: "G-FE5QXHBQK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

