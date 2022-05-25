import { init } from "next-firebase-auth";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  query,
  getDocs,
  collection,
  where,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "./client";

import dataExercices from 'data/lista_ejercicios.json'

const initAuth = () => {
  init({
    authPageURL: "/login",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login",
    logoutAPIEndpoint: "/api/logout",
    firebaseAdminInitConfig: {
      credential: {
        projectId: "gtrain-a06c6",
        clientEmail:
          "firebase-adminsdk-9oamj@gtrain-a06c6.iam.gserviceaccount.com",
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyD61g2BrdWW5sIGZ9ZqADDyM5A5YFAVUa4",
      authDomain: "gtrain-a06c6.firebaseapp.com",
      projectId: "gtrain-a06c6",
    },
    cookies: {
      name: "gtrain-coockie-app",

      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000,
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: true,
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
};

export default initAuth;

export const googleSignIn = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const q = query(collection(db, "usuarios"), where("id", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "usuarios", user.uid), {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        age: "",
        bonos: "",
        condition: "Nuevo",
        direction: "",
        exercices: dataExercices,
        payments: [],
        reservations: [],
        type: "Client",
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const googleSignOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Signout Succesfull");
    })
    .catch((error) => {
      console.log("Signout Failed" + error);
    });
};
