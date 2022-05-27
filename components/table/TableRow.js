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
        <Image src="/Edit.svg" alt="" width={20} height={20} />
        <Image src="/Delete.svg" alt="" width={20} height={20} />
      </div>
    </div>
  );
}

export default TableRow;
