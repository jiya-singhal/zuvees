import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
   apiKey: "AIzaSyDWeJxEbttfcS2agA_cj4IdGz2ukWQnxco",
   authDomain: "fullstack-ecommerce-a6158.firebaseapp.com",
   projectId: "fullstack-ecommerce-a6158",
   storageBucket: "fullstack-ecommerce-a6158.firebasestorage.app",
   messagingSenderId: "171642229956",
   appId: "1:171642229956:web:3c3c9de0ed146718d2e591",
   measurementId: "G-SS1FT4MLH0"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;


