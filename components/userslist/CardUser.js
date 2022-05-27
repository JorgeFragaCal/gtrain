import Image from "next/image";
import Link from "next/link";
import AlertDelete from "components/AlertDelete";

import styles from "styles/CardUser.module.scss";
import { useState } from "react";

function CardUser({ data }) {
  const [isOpen, setOpen] = useState(false);
  const openForm = () => {
    setOpen(!isOpen);
  };
  return (
    <section className={styles.container}>
      <div onClick={openForm} id={styles.delete}>
        <Image src="/Close.svg" alt="" width={20} height={20} />
      </div>
      {isOpen ? <AlertDelete setOpen={openForm} id={data.id}/> : null}
      <Link href={`/usuario/${data.id}`}>
        <a>
          <div className={styles.card}>
            {data.photoURL ? (
              <Image
                src={`${data.photoURL}`}
                alt={data.name}
                width="125"
                height="125"
              />
            ) : (
              <Image
                src="/LogoLogin.jpg"
                alt="Settings"
                width="125"
                height="125"
              />
            )}
            <h4>
              {data.name}
              {data.second_name}
            </h4>
            <p>{data.email}</p>
            <p>{data.mobile_number}</p>
          </div>
        </a>
      </Link>
    </section>
  );
}
export default CardUser;
