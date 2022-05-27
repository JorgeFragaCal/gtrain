import { useState, useEffect } from "react";

import styles from "styles/Card.module.scss";

import CardWods from "components/card/CardWods";
import { getData } from "utils/client";

function GridCardsWods() {
   const [wodList, setWodList] = useState([]);
   useEffect(() => {
     getData("wods")
       .then((data) => {
         const dataSort = data.sort((a, b) => a.title.localeCompare(b.title));
         setWodList(dataSort);
       })
       .catch(console.log("no hay WODs"));
   }, []);
  return (
    <section className={styles.gridCards}>
      {wodList.map((i) => (
        <CardWods key={i.name} data={i} />
      ))}
    </section>
  );
}

export default GridCardsWods;
