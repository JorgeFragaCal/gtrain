import styles from "styles/AlertDelete.module.scss";
function AlertDelete() {
  return (
    <div className={`${styles.container} ${styles.active}`}>
      Seguro que quieres borrar
      <div className={styles.buttons}>
        <button className={styles.delete} type="submit">
          SI
        </button>
        <button type="submit">NO</button>
      </div>
    </div>
  );
}

export default AlertDelete;
