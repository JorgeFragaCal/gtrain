import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  query,
  where,
  getFirestore,
  deleteDoc,
} from "firebase/firestore";

import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD61g2BrdWW5sIGZ9ZqADDyM5A5YFAVUa4",
  authDomain: "gtrain-a06c6.firebaseapp.com",
  projectId: "gtrain-a06c6",
};
getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore();

export const getData = async (data) => {
  const dbRef = collection(db, data);
  return await getDocs(dbRef).then((e) => {
    return e.docs.map((e) => e.data());
  });
};

export const getUserInfo = async (id) => {
  const userRef = doc(db, "usuarios", id);
  return await getDoc(userRef).then((doc) => {
    return doc.data();
  });
};

export const addWod = async (data) => {
  try {
    const q = query(collection(db, "wods"), where("title", "==", data.title));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "wods"), data);
      console.log("Wod Añadido");
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const deleteItem = async (id) => {
  try {
    const q = query(collection(db, "wods"), where("id", "==", id));
    const docs = await getDocs(q);
    docs.forEach(async (d) => {
      await deleteDoc(doc(db, "wods", d.id));
      console.log('Borrao');
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
