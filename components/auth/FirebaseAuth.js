import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
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
const googleSignOut = () => {
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
          text={"Login con Google"}
          type={"primary"}
        />
      ) : null}
    </div>
  );
};

export default FirebaseAuth;
