import { useState, useEffect } from "react";

import styles from "styles/Card.module.scss";

import CardWods from "components/card/CardWods";
import { getData } from "utils/client";

function GridCardsWods() {
   const [wodList, setWodList] = useState([]);
   useEffect(() => {
     getData("wods")
       .then((data) => {
         setWodList(data);
       })
       .catch(console.log("mal"));
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
