import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import FirebaseAuth from "components/auth/FirebaseAuth";
import { withAuthUser, AuthAction } from "next-firebase-auth";

function Login() {
  return (
    <section>
      <div>
        <Image src="/Logo.png" width="100" height="100"></Image>
        <Image src="/LogoUser.png" width="100" height="100"></Image>
        <h1>Iniciar Sesion</h1>
        <FirebaseAuth/>
      </div>
      <div></div>
    </section>
  );
}

export default withAuthUser({
 whenAuthed: AuthAction.REDIRECT_TO_APP,
})(Login);
