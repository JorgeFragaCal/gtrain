import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/CardUser.module.scss";

function CardUser({ data }) {
  return (
    <Link href={`/usuario/${data.id}`}>
      <a>
        <div className={styles.card}>
          <img src={`${data.image}`} width="160" alt={data.name} />
          <h4>
            {data.name}
            {data.second_name}
          </h4>
          <p>{data.email}</p>
          <p>{data.mobile_number}</p>
          <div className={styles.icons}>
            <i>Editar</i>
            <i>Eliminar</i>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default CardUser;
