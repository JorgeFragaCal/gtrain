import styles from "styles/Leyend.module.scss";
function Leyend() {
  return (
    <section className={styles.container}>
      <span id={styles.n} className={styles.leyend}>
        Strength
      </span>
      <span id={styles.r} className={styles.leyend}>
        Gymnastics
      </span>
      <span id={styles.v} className={styles.leyend}>
        Mobility
      </span>
      <span id={styles.p} className={styles.leyend}>
        Endurance
      </span>
    </section>
  );
}

export default Leyend;
