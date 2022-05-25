import TableRow from "./TableRow";
import styles from "styles/Table.module.scss";

function Table() {
  const data = [
    {
      id: 1,
      date: "24/05/2022",
      time: "9:30",
      name: "Adrian Martinez",
      img: "/Logo.jpg",
      state: "Pendiente",
    },
    {
      id: 2,
      date: "24/05/2022",
      time: "9:30",
      name: "Aaron Jiménez",
      img: "/Logo.jpg",
      state: "Pendiente",
    },
    {
      id: 3,
      date: "24/05/2022",
      time: "9:30",
      name: "Estela Pérez",
      img: "/Logo.jpg",
      state: "Reservado",
    },
    {
      id: 4,
      date: "24/05/2022",
      time: "9:30",
      name: "Olga Latorre",
      img: "/Logo.jpg",
      state: "Reservado",
    },
    {
      id: 5,
      date: "24/05/2022",
      time: "9:30",
      name: "Damian Cordon",
      img: "/Logo.jpg",
      state: "Reservado",
    },
    {
      id: 6,
      date: "24/05/2022",
      time: "9:30",
      name: "David Leon",
      img: "/Logo.jpg",
      state: "Reservado",
    },
    {
      id: 7,
      date: "24/05/2022",
      time: "9:30",
      name: "Julian Davila",
      img: "/Logo.jpg",
      state: "Reservado",
    },
    {
      id: 8,
      date: "24/05/2022",
      time: "9:30",
      name: "Ariadna Farre",
      img: "/Logo.jpg",
      state: "Reservado",
    },
    {
      id: 9,
      date: "24/05/2022",
      time: "9:30",
      name: "Jennifer Linares",
      img: "/Logo.jpg",
      state: "Reservado",
    },
    {
      id: 10,
      date: "24/05/2022",
      time: "9:30",
      name: "Roger Pino",
      img: "/Logo.jpg",
      state: "Reservado",
    },
    {
      id: 11,
      date: "24/05/2022",
      time: "9:30",
      name: "Roger Pino",
      img: "/Logo.jpg",
      state: "Reservado",
    },
  ];
  return (
    <section className={styles.container}>
      {data.map((e) => (
        <TableRow
          key={e.id}
          name={e.name}
          img={e.img}
          state={e.state}
          date={e.date}
          time={e.time}
        />
      ))}
    </section>
  );
}

export default Table;
