import ListMessajesRow from "./ListMessajesRow";
import styles from "styles/ListMessajes.module.scss";
function ListMessajes() {
  const clients = [
    {
      name: "Adrian Martinez",
      date: "03-05-2022",
      time: "11:30",
      condition: "cancelado",
    },
    {
      name: "Aaron Jiménez",
      date: "03-05-2022",
      time: "11:30",
      condition: "reservado",
    },
    {
      name: "Estela Pérez",
      date: "03-05-2022",
      time: "11:30",
      condition: "cancelado",
    },
    {
      name: "Olga Latorre",
      date: "03-05-2022",
      time: "11:30",
      condition: "reservado",
    },
    {
      name: "Damian Cordon",
      date: "03-05-2022",
      time: "11:30",
      condition: "reservado",
    },
    {
      name: "David Leon",
      date: "03-05-2022",
      time: "11:30",
      condition: "reservado",
    },
    {
      name: "Julian Davila",
      date: "03-05-2022",
      time: "11:30",
      condition: "reservado",
    },
    {
      name: "Julian Davila",
      date: "03-05-2022",
      time: "11:30",
      condition: "reservado",
    },
  ];
  return (
    <section>
      <h3>Alertas</h3>
      <div className={styles.container}>
        {clients.map((i) => (
          <ListMessajesRow
            key={i.img}
            name={i.name}
            img={i.img}
            condition={i.condition}
            date={i.date}
            time={i.time}
          />
        ))}
      </div>
    </section>
  );
}

export default ListMessajes;
