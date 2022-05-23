import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

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
