import wodsList from "data/calendario.json";
import { useState, useEffect } from "react";
import { getData } from "utils/client";

import styles from "styles/Card.module.scss";

import CardWods from "components/card/CardWods";

function GridCardsWods() {
   const [wodList, setWodList] = useState([]);
   useEffect(() => {
     getData("calendar")
       .then((data) => {
         setWodList(data);
       })
       .catch(console.log("no hay WODS semanales"));
   }, []);
  return (
    <section className={styles.listCards}>
      {wodList.map((i) => (
        <CardWods key={i.day} data={i} center={"center"} />
      ))}
    </section>
  );
}

export default GridCardsWods;
