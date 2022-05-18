import styles from "../styles/Top.module.css";
function Top({ title }) {
  return (
    <section className={styles.container}>
      <div className={styles.topTitle}>
        <i>Icono</i>
        <h1>{title}</h1>
      </div>
      <div></div>
      <div className={styles.topTitle}>
        <i>🔍</i>
        <input id={styles.buscador} type="text" name="buscar"  />
      </div>
    </section>
  );
}

export default Top;
