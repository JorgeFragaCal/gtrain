import Image from "next/image";
import styles from "styles/Top.module.scss";
function Top({ title }) {
  return (
    <section className={styles.container}>
      <div className={styles.topTitle}>
        <i>Icono</i>
        <h1>{title}</h1>
      </div>
      <div></div>
      <div className={styles.topTitle}>
        <Image alt='search' src='/Search.svg' width={30} height={30}/>
        <input id={styles.buscador} type="text" name="buscar" />
      </div>
    </section>
  );
}

export default Top;
