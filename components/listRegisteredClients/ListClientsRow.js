import Image from "next/image";
import styles from "styles/ListRegisteredClients.module.scss";

function ListClientsRow({ name, img, condition }) {
  return (
    <div className={styles.listRow}>
      <Image src={img} alt="" width={40} height={40} />
      <span>{name}</span>
      {condition ? (
        <span className={`${styles.condition} ${styles[condition]}`}>
          {condition}
        </span>
      ) : null}
    </div>
  );
}

export default ListClientsRow;
