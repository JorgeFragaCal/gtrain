import Image from "next/image";
import styles from "styles/BottonApp.module.scss";
function BottonApp() {
  return (
    <section className={styles.container}>
      <div className={styles.menulist}>
        <Image alt="search" src="/Home.svg" width={30} height={30} />
      </div>
      <div className={styles.menulist}>
        <Image alt="search" src="/Weightlifting.svg" width={30} height={30} />
      </div>
      <div className={styles.menulist}>
        <Image alt="search" src="/Schedule.svg" width={30} height={30} />
      </div>
    </section>
  );
}

export default BottonApp;
