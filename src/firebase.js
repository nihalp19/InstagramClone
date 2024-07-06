import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDdFkpGz9tzXheUXTcWBmiV1jP0Z3DuMoE",
  authDomain: "nihalinstaclone.firebaseapp.com",
  projectId: "nihalinstaclone",
  storageBucket: "nihalinstaclone.appspot.com",
  messagingSenderId: "132659681790",
  appId: "1:132659681790:web:f539fff21bb81da078c8af",
  measurementId: "G-7WFT80F2JD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);