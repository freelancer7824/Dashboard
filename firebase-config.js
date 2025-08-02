import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2eI8wHpjQsd-jOuEvIfW_Om2DnxUixHI",
  authDomain: "inc-project-65096.firebaseapp.com",
  databaseURL: "https://inc-project-65096-default-rtdb.firebaseio.com",
  projectId: "inc-project-65096",
  storageBucket: "inc-project-65096.firebasestorage.app",
  messagingSenderId: "164350074126",
  appId: "1:164350074126:web:28144737a66cb8055f8b5f",
  measurementId: "G-EBPRH80411"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { app, db, auth };