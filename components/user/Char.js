import styles from "styles/Char.module.scss";
function Chart() {
  const numero = 50;
  return (
    <section className={styles.container}>
      <h3>Estadísticas Mensuales</h3>
      <div className={styles.charContainer}>
        <div>
          <div className={styles.columnChart}>
            <div
              className={styles.columnProgres}
              style={{ height: "50%", backgroundColor: "#EF5DA8" }}
            ></div>
          </div>
          <p>Gymnastics</p>
        </div>
        <div>
          <div className={styles.columnChart}>
            <div
              className={styles.columnProgres}
              style={{ height: "75%", backgroundColor: "#FF7A00" }}
            ></div>
          </div>
          <p>Strength</p>
        </div>
        <div>
          <div className={styles.columnChart}>
            <div
              className={styles.columnProgres}
              style={{ height: "60%", backgroundColor: "#659B8F" }}
            ></div>
          </div>
          <p>Mobility</p>
        </div>
        <div>
          <div className={styles.columnChart}>
            <div
              className={styles.columnProgres}
              style={{ height: "20%", backgroundColor: "#6644FF" }}
            ></div>
          </div>
          <p>Endurance</p>
        </div>
      </div>
    </section>
  );
}

export default Chart;
