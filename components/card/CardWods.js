import styles from "styles/Card.module.scss";

import AlertDelete from "components/AlertDelete";
import Image from "next/image";
import { useState } from "react";

function CardWods({ data, center }) {
  const [isOpen, setOpen] = useState(false);
  const openForm = () => {
    setOpen(!isOpen);
  };
  return (
    <div
      className={`${styles.card} ${
        data ? (data.destacado ? styles.destacado : null) : null
      }`}
    >
      <div className={styles.cardContent} style={{ textAlign: center }}>
        {data.day ? (
          <>
            <div className={styles.cardTop}>
              <p className={styles.cardTitle}>{data.day}</p>
              <div className={styles.cardIcons}>
                <Image src="/Edit.svg" alt="" width={20} height={20} />
                <Image
                  onClick={openForm}
                  src="/Delete.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <p className={styles.cardTitle}>{data.title}</p>
          </>
        ) : (
          <div className={styles.cardTop}>
            <p className={styles.cardTitle}>{data.title}</p>
            <div className={styles.cardIcons}>
              <Image src="/Edit.svg" alt="" width={20} height={20} />
              <Image
                onClick={openForm}
                src="/Delete.svg"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        )}
        {isOpen ? <AlertDelete setOpen={openForm} id={data.id} /> : null}
        <ul className={styles.cardList}>
          {data.exercise
            ? data.exercise.map((i) => (
                <li key={i.id}>
                  {i.reps} {i.name}
                </li>
              ))
            : null}
        </ul>
      </div>
      {data.time | data.rounds ? (
        <div className={styles.cardFooter}>
          {data.time ? <span>{data.time} min</span> : null}
          {data.rounds ? <span>{data.rounds} Rondas</span> : null}
        </div>
      ) : null}
    </div>
  );
}

export default CardWods;
