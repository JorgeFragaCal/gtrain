import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD61g2BrdWW5sIGZ9ZqADDyM5A5YFAVUa4",
  authDomain: "gtrain-a06c6.firebaseapp.com",
  projectId: "gtrain-a06c6",
};
getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

const dbRef = collection(db, "usuarios");
export const getUsers = async () => {
  await getDocs(dbRef).then((e) =>
    console.log(
      e.docs.map((e) => {
        return e.data();
      })
    )
  );
};

export const getUserInfo = (id) => {
  const userRef = doc(db, "usuarios", id);
  return getDoc(userRef).then((doc) => {
    const data = doc.data();
    return data;
  });
};

/*

const {
      age,
      bonos,
      condition,
      direction,
      exercices,
      image,
      payments,
      reservations,
      type,
    } = doc.data();

*/
