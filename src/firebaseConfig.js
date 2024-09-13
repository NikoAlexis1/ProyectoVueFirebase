// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADDaGqlNVbbvXedN3oMcxVOL8k1HlRqn8",
  authDomain: "proyectovue-b6e3e.firebaseapp.com",
  projectId: "proyectovue-b6e3e",
  storageBucket: "proyectovue-b6e3e.appspot.com",
  messagingSenderId: "847730998770",
  appId: "1:847730998770:web:e19ebe1bf051bf5c4d7f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app