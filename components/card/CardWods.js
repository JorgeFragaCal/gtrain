import styles from "styles/Card.module.scss";

import AlertDelete from "components/AlertDelete";

function CardWods({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardTop}>
          <p className={styles.cardTitle}>{data.name}</p>
          <div className={styles.cardIcons}>
            <i>Editar</i>
            <i>Borrar</i>
          </div>
        </div>
        <AlertDelete />
        <ul className={styles.cardList}>
          {data.exercise.map((i) => (
            <li key={i.id}>
              {i.reps} {i.name}
            </li>
          ))}
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
