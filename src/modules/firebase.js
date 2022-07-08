// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaad7FZx2m6r7ju95WZxTbi1UvaYVomYI",
  authDomain: "pay-510.firebaseapp.com",
  projectId: "pay-510",
  storageBucket: "pay-510.appspot.com",
  messagingSenderId: "60900274347",
  appId: "1:60900274347:web:dff9b12f777dd1f272c7ee",
  measurementId: "G-LMDX86LB2R"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;