import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2WGGNDb58BlSDevzUgcypqSe0TRsHfrw",
  authDomain: "news-portal-af8d0.firebaseapp.com",
  databaseURL: "https://news-portal-af8d0-default-rtdb.firebaseio.com",
  projectId: "news-portal-af8d0",
  storageBucket: "news-portal-af8d0.firebasestorage.app",
  messagingSenderId: "501933866498",
  appId: "1:501933866498:web:8ff136592962d8d77b711b",
  measurementId: "G-G1TLL2K75S"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { app, db, auth };