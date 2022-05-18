import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD61g2BrdWW5sIGZ9ZqADDyM5A5YFAVUa4",
  authDomain: "gtrain-a06c6.firebaseapp.com",
  projectId: "gtrain-a06c6",
  storageBucket: "gtrain-a06c6.appspot.com",
  messagingSenderId: "1076728348406",
  appId: "1:1076728348406:web:8fd274b3cea26562e7f6d7",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
