import styles from "styles/Char.module.scss";
function Chart() {


  const g = (6 * 100) / 12;
  const s = (4 * 100) / 12;
  const m = (2 * 100) / 12;
  const e = (1 * 100) / 12;


  return (
    <section className={styles.container}>
      <h3>Estadísticas Mensuales</h3>
      <div className={styles.charContainer}>
        <div>
          <div className={styles.columnChart}>
            <div
              className={styles.columnProgres}
              style={{ height: `${g}%`, backgroundColor: "#EF5DA8" }}
            ></div>
          </div>
          <p>Gymnastics</p>
        </div>
        <div>
          <div className={styles.columnChart}>
            <div
              className={styles.columnProgres}
              style={{ height: `${s}%`, backgroundColor: "#FF7A00" }}
            ></div>
          </div>
          <p>Strength</p>
        </div>
        <div>
          <div className={styles.columnChart}>
            <div
              className={styles.columnProgres}
              style={{ height: `${m}%`, backgroundColor: "#659B8F" }}
            ></div>
          </div>
          <p>Mobility</p>
        </div>
        <div>
          <div className={styles.columnChart}>
            <div
              className={styles.columnProgres}
              style={{ height: `${e}%`, backgroundColor: "#6644FF" }}
            ></div>
          </div>
          <p>Endurance</p>
        </div>
      </div>
    </section>
  );
}

export default Chart;
