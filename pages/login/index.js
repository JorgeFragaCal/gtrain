import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";
import Button from "../../components/atoms/Button";

function Login() {
  return (
    <section>
      <div>
        <Image src="/Logo.png" width="100" height="100"></Image>
        <Image src="/LogoUser.png" width="100" height="100"></Image>
        <h1>Iniciar Sesion</h1>
        <Button text={"Entrar con Google"} onClick={""} type={"primary"} />
      </div>
      <div></div>
    </section>
  );
}

export default Login;
