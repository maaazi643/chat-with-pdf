import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBePUFZzE_KAYNKVnZRW1R3e3epsQtuMKg",
  authDomain: "chat-with-pdf-app-88b11.firebaseapp.com",
  projectId: "chat-with-pdf-app-88b11",
  storageBucket: "chat-with-pdf-app-88b11.firebasestorage.app",
  messagingSenderId: "999193384469",
  appId: "1:999193384469:web:3bb7f5cd209f098064601c",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
