import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import categories from './categories.json' assert { type: 'json' };

// Configuración de Firebase (la misma que me diste)
const firebaseConfig = {
  apiKey: "AIzaSyAmxeuWXe628yjOuVu4F6K_xNe121NScjY",
  authDomain: "coderhouse-prueba-jsodo.firebaseapp.com",
  projectId: "coderhouse-prueba-jsodo",
  storageBucket: "coderhouse-prueba-jsodo.appspot.com",
  messagingSenderId: "459900385309",
  appId: "1:459900385309:web:547e2a4bc7f5ced34a6ef4"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para subir productos a Firestore
const uploadProducts = async () => {
  try {
    const productsCollection = collection(db, 'categories'); // Colección 'products'
    
    // Iterar sobre los productos y agregarlos a Firestore
    for (const product of categories) {
      await addDoc(productsCollection, product);
      console.log(`Producto con id ${product.id} subido con éxito.`);
    }

    console.log("Todos los productos han sido subidos.");
  } catch (error) {
    console.error("Error al subir los productos:", error);
  }
};

// Llamar a la función para iniciar la subida
uploadProducts();
