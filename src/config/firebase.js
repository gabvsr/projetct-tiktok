import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyB-XFqJEYhXYjO7RoJw5lMWqKTKPx7lUFQ",
    authDomain: "projetotiktok-clone.firebaseapp.com",
    projectId: "projetotiktok-clone",
    storageBucket: "projetotiktok-clone.appspot.com",
    messagingSenderId: "707155438534",
    appId: "1:707155438534:web:8ef735059547014390a0c7",
    measurementId: "G-0G1N4SBCKP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;
