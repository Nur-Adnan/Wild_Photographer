// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOe8txXi4chRiz5_s7nezb0xfeKVuqa98",
  authDomain: "assignment-10-4cc4e.firebaseapp.com",
  projectId: "assignment-10-4cc4e",
  storageBucket: "assignment-10-4cc4e.appspot.com",
  messagingSenderId: "616765843021",
  appId: "1:616765843021:web:352ee9a4ff69d7f07cde04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
