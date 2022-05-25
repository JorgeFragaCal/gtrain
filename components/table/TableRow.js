import Image from "next/image";
import styles from "styles/Table.module.scss";

function TableRow({ name, img, state, date, time }) {
  return (
    <div className={styles.row}>
      <div className={styles.user}>
        <Image src={`${img}`} width={50} height={50} />
        <div>{name}</div>
      </div>
      <div>
        <span className={styles[state]}>{state}</span>
      </div>
      <div>{date}</div>
      <div>
        <strong>{time}</strong>
      </div>
      <div>
        <i>Editar</i>
        <i>Eliminar</i>
      </div>
    </div>
  );
}

export default TableRow;
