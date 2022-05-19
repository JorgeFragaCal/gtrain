import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Button from "components/atoms/Button";
/*
const firebaseAuthConfig = {
  signInFlow: "popup",

  signInOptions: [
    {
      provider: GoogleAuthProvider,
      requireDisplayName: false,
    },
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};*/

const googleSignIn = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log('Login!!!');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
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

const FirebaseAuth = () => {
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    setRenderAuth(true);
  }, []);
  return (
    <div>
      {renderAuth ? (
        <Button
          onClick={googleSignIn}
          text={"Entrar con Google"}
          type={"secondary"}
          icon={"/logo-google.png"}
        />
      ) : null}
    </div>
  );
};

export default FirebaseAuth;
