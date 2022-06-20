import Image from "next/image";
import styles from "styles/TopApp.module.scss";
function TopApp({ title }) {
  return (
    <section className={styles.container}>
      <div className={styles.topTitle}>
        <Image
          alt="search"
          src="/logo-gtrain-blanco.svg"
          width={30}
          height={30}
        />
      </div>
      <div className={styles.topTitle}>
        <Image alt="search" src="/Settings.svg" width={30} height={30} />
      </div>
    </section>
  );
}

export default TopApp;
