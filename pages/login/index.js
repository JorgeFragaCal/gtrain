import Link from "next/link";
import styles from "../../styles/Home.module.css";

function Login() {
  return (
    <section>
      <h1 className={styles.title}>Login</h1>
      <Link href="/">Home</Link>
    </section>
  );
}

export default Login;
