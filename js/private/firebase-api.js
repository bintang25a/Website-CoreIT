import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push, get, remove, set, onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtnnwTs5AxTrB4_i2n77O6CNRhFP7312U",
  authDomain: "bintang-webdev.firebaseapp.com",
  databaseURL: "https://bintang-webdev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bintang-webdev",
  storageBucket: "bintang-webdev.firebasestorage.app",
  messagingSenderId: "376706787982",
  appId: "1:376706787982:web:3f3feee875961c8efc37df",
  measurementId: "G-0PZ4HTEFK8"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function getMember() {
    const snapshot = await get(ref(db, "member-CoreIT"));
    const members = snapshot.val();
    return members ? Object.entries(members).map(([id, data]) => ({ id, ...data })) : [];
}