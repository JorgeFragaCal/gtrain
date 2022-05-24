import styles from "styles/Places.module.scss";

function PlacesRow({ places, time }) {
  return (
    <section className={styles.rowContainer}>
      <div className={styles.time}>
        <strong>{time}</strong>
      </div>
      <div className={styles.places}>
        <div className={styles.placesProgress} style={{ width: places*8.3+'%' }}>
          {places}/12
        </div>
      </div>
    </section>
  );
}

export default PlacesRow;
