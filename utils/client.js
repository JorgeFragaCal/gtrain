import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD61g2BrdWW5sIGZ9ZqADDyM5A5YFAVUa4",
  authDomain: "gtrain-a06c6.firebaseapp.com",
  projectId: "gtrain-a06c6",
};
getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore();

export const getUsersList = async (data) => {
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
