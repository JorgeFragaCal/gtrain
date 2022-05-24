import styles from "styles/Card.module.scss";

import AlertDelete from "components/AlertDelete";

function CardWods({ data, center }) {
  return (
    <div
      className={`${styles.card} ${
        data.wod ? (data.wod.name ? styles.destacado : null) : null
      }`}
    >
      <div className={styles.cardContent} style={{ textAlign: center }}>
        {data.day ? (
          <>
            <div className={styles.cardTop}>
              <p className={styles.cardTitle}>{data.day}</p>
              <div className={styles.cardIcons}>
                <i>Editar</i>
                <i>Borrar</i>
              </div>
            </div>

            <p className={styles.cardTitle}>{data.wod.name}</p>
          </>
        ) : (
          <div className={styles.cardTop}>
            <p className={styles.cardTitle}>{data.name}</p>
            <div className={styles.cardIcons}>
              <i>Editar</i>
              <i>Borrar</i>
            </div>
          </div>
        )}
        <AlertDelete display={false} />
        <ul className={styles.cardList}>
          {data.exercise
            ? data.exercise.map((i) => (
                <li key={i.id}>
                  {i.reps} {i.name}
                </li>
              ))
            : data.wod.exercise.map((i) => (
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

      {data.wod ? (
        data.wod.time | data.wod.rounds ? (
          <div className={styles.cardFooter}>
            {data.wod.time ? <span>{data.wod.time} min</span> : null}
            {data.wod.rounds ? <span>{data.wod.rounds} Rondas</span> : null}
          </div>
        ) : null
      ) : null}
    </div>
  );
}

export default CardWods;
