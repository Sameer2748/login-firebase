import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBTPE1bLUiowbnHGtaJ5cnmb8c0Gf07Kac",
  authDomain: "vast-crow-429617-g0.firebaseapp.com",
  projectId: "vast-crow-429617-g0",
  storageBucket: "vast-crow-429617-g0.appspot.com",
  messagingSenderId: "1092070958252",
  appId: "1:1092070958252:web:a7c5b7bffde07a062a2b09",
  measurementId: "G-PS5100QT9B"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);
//  auth.settings.appVerificationDisabledForTesting = true;

export {auth}