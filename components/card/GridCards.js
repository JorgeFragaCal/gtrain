import React from "react";
import Card from "./Card";
import wodsList from "../../data/lista wods.json";
import styles from "../../styles/Card.module.css"
function GridCards() {
  return (
    <section className={styles.gridCards}>
      {wodsList.list_of_wods.map((i) => (
        <Card key={i.id} data={i} />
      ))}
    </section>
  );
}

export default GridCards;
