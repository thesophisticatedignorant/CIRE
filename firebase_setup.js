import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  projectId: "cire-conglomerate",
  appId: "1:849410729611:web:39f0173b5be4bafd81168e",
  storageBucket: "cire-conglomerate.firebasestorage.app",
  apiKey: "AIzaSyBKkJIG9r963JCq9UzsZ4vfQ_WS6jnYjQ8",
  authDomain: "cire-conglomerate.firebaseapp.com",
  messagingSenderId: "849410729611"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.firebaseDB = db;
window.firebaseAddDoc = addDoc;
window.firebaseCollection = collection;
window.firebaseGetDocs = getDocs;
window.firebaseServerTimestamp = serverTimestamp;

window.firebaseDoc = doc;
window.firebaseDeleteDoc = deleteDoc;
