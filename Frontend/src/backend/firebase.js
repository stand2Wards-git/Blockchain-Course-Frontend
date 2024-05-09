import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIjdtCpQYzFWAyEatJJpnwyurntVPEVIc",
  authDomain: "blockchain-learning-cource.firebaseapp.com",
  projectId: "blockchain-learning-cource",
  storageBucket: "blockchain-learning-cource.appspot.com",
  messagingSenderId: "506043938063",
  appId: "1:506043938063:web:40f262db3b4ef9d9023a7a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
