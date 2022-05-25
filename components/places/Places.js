import PlacesRow from "./PlacesRow";
import styles from "styles/Places.module.scss";

function Places() {
  const s = [
    { id:1,time: "08:00/09:00", places: 12 },
    { id:2,time: "09:00/10:00", places: 10 },
    { id:3,time: "10:00/11:00", places: 11 },
    { id:4,time: "17:30-18:30", places: 10 },
    { id:5,time: "18:30-19:30", places: 12 },
    { id:6,time: "19:30-20:30", places: 8 },
    { id:7,time: "20:30/21:30", places: 8 },
    { id:8,time: "21:30/22:30", places: 8 },
  ];
  return (
    <section>
      <h3>Lunes 03</h3>
      <div className={styles.container}>
        {s.map((i) => (
          <PlacesRow key={i.id} time={i.time} places={i.places} />
        ))}
      </div>
    </section>
  );
}

export default Places;
