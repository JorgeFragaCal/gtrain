import wodsList from "../../data/lista_wods.json";

import styles from "../../styles/Card.module.css"

import CardWods from "./CardWods";

function GridCardsWods() {
  return (
    <section className={styles.gridCards}>
      {wodsList.list_of_wods.map((i) => (
        <CardWods key={i.id} data={i} />
      ))}
    </section>
  );
}

export default GridCardsWods;
