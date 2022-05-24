import Image from "next/image";
import styles from "styles/ListMessajes.module.scss";

function ListMessajesRow({ name, date, time, condition }) {
  console.log(name, date, time, condition);
  return (
    <div className={styles.listRow}>
      <span>
        {name} ha
        {condition ? (
          <span className={styles[condition]}>
            <strong> {condition}</strong>{" "}
          </span>
        ) : null}
        el día {date} a las {time}
      </span>
    </div>
  );
}

export default ListMessajesRow;
