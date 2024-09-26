import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmxeuWXe628yjOuVu4F6K_xNe121NScjY",
  authDomain: "coderhouse-prueba-jsodo.firebaseapp.com",
  projectId: "coderhouse-prueba-jsodo",
  storageBucket: "coderhouse-prueba-jsodo.appspot.com",
  messagingSenderId: "459900385309",
  appId: "1:459900385309:web:547e2a4bc7f5ced34a6ef4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export {database}