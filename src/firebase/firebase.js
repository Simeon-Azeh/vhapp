// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGGB3s_RU0pqUihy2fsutpEo_BLceBjyI",
  authDomain: "vocationalhub-3b79f.firebaseapp.com",
  projectId: "vocationalhub-3b79f",
  storageBucket: "vocationalhub-3b79f.firebasestorage.app",
  messagingSenderId: "846853827563",
  appId: "1:846853827563:web:47d8a64d1d0671275f87ae",
  measurementId: "G-JTV3LDY3BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  // Get Analytics without needing the 'Analytics' type
const auth = getAuth(app);

export { app, analytics, auth };
