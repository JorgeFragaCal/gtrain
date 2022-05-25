import wodsList from "data/calendario.json";

import styles from "styles/Card.module.scss";

import CardWods from "components/card/CardWods";

function GridCardsWods() {
  return (
    <section className={styles.listCards}>
      {wodsList.calendar.map((i) => (
        <CardWods key={i.day} data={i} center={'center'}/>
      ))}
    </section>
  );
}

export default GridCardsWods;
