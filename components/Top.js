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
        <input className={styles.buscador} type="text" name="buscar" id="" />
      </div>
    </section>
  );
}

export default Top;
