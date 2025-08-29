
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATpO-EFkwSbhO7sYgg88zW4RtfrrkcLdg",
  authDomain: "goalproject-ras.firebaseapp.com",
  projectId: "goalproject-ras",
  storageBucket: "goalproject-ras.firebasestorage.app",
  messagingSenderId: "592634480096",
  appId: "1:592634480096:web:0e7517a4fbd91a31b29785"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)