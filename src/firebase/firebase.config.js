// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TOAdd SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS7COPrD1zqF6JsZEEPhQ8l6lu03kt6uo",
  authDomain: "mils-cocep-one-vid-proje-aafa4.firebaseapp.com",
  projectId: "mils-cocep-one-vid-proje-aafa4",
  storageBucket: "mils-cocep-one-vid-proje-aafa4.firebasestorage.app",
  messagingSenderId: "525000914981",
  appId: "1:525000914981:web:c913b965a791bd26df67cc"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
