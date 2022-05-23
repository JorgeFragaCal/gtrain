import React, { useEffect, useState } from "react";

import Button from "components/atoms/Button";
import { googleSignIn } from "utils/initAuth";

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
