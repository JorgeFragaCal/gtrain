import ListClientsRow from "./ListClientsRow";
import styles from "styles/ListRegisteredClients.module.scss";
function ListClients() {
  const clients = [
    { name: "Adrian Martinez", img: "/Logo.jpg", condition: "" },
    { name: "Aaron Jiménez", img: "/Logo.jpg", condition: "Lesionado" },
    { name: "Estela Pérez", img: "/Logo.jpg", condition: "" },
    { name: "Olga Latorre", img: "/Logo.jpg", condition: "" },
    { name: "Damian Cordon", img: "/Logo.jpg", condition: "" },
    { name: "David Leon", img: "/Logo.jpg", condition: "" },
    { name: "Julian Davila", img: "/Logo.jpg", condition: "" },
    { name: "Ariadna Farre", img: "/Logo.jpg", condition: "Nueva" },
    { name: "Jennifer Linares", img: "/Logo.jpg", condition: "" },
    { name: "Roger Pino", img: "/Logo.jpg", condition: "Senior" },
    { name: "Roger Pina", img: "/Logo.jpg", condition: "Senior" },
  ];
  return (
    <section>
      <h3>Reservas 10:00 - 11:00</h3>
      <div className={styles.container}>
        {clients.map((i) => (
          <ListClientsRow
            key={i.name}
            name={i.name}
            img={i.img}
            condition={i.condition}
          />
        ))}
      </div>
    </section>
  );
}

export default ListClients;
