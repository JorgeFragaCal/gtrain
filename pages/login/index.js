import styles from "styles/Login.module.scss";
import Image from "next/image";
import FirebaseAuth from "components/auth/FirebaseAuth";
import { withAuthUser, AuthAction } from "next-firebase-auth";

function Login() {
  return (
    <section className={styles.container}>
      <section className={styles.login}>
        <Image alt="" src="/Logo.png" width="170" height="50"></Image>
        <div className={styles.loginForm}>
          <div className={styles.imgLogo}>
            <Image alt="" src="/LogoLogin.jpg" width="170" height="170"></Image>
          </div>
          <h1>Iniciar Sesion</h1>
          <FirebaseAuth />
        </div>
        <div></div>
      </section>
      <div className={styles.imgBackgroud}></div>
    </section>
  );
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(Login);
