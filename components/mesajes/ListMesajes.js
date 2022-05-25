import ListMessajesRow from "./ListMessajesRow";
import styles from "styles/ListMessajes.module.scss";
function ListMessajes() {
  const clients = [
    {
      id: 1,
      name: "Adrian Martinez",
      date: "03-05-2022",
      time: "11:30",
      condition: "cancelado",
    },
    {
      id: 2,
      name: "Aaron Jiménez",
      date: "03-05-2022",
      time: "11:30",
      condition: "reservado",
    },
    {
      id: 3,
      name: "Estela Pérez",
      date: "03-05-2022",
      time: "11:30",
      condition: "cancelado",
    },
    {
      id: 4,
      name: "Olga Latorre",
      date: "03-05-2022",
      time: "11:30",
      condition: "reservado",
    },
    {
      id: 5,
      name: "Damian Cordon",
      date: "03-05-2022",
      time: "11:30",
      condition: "reservado",
    },
    {
      id: 6,
      name: "David Leon",
      date: "03-05-2022",
      time: "11:30",
      condition: "reservado",
    },
    {
      id: 7,
      name: "Julian Davila",
      date: "03-05-2022",
      time: "11:30",
      condition: "reservado",
    },
    {
      id: 8,
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
            key={i.id}
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
