import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "styles/Calendar.module.scss"
import { useState } from "react";

function Calendario() {
  const [value, onChange] = useState(new Date());
  return (
    <section className={styles.container}>
      <h3>Reservas</h3>
      <Calendar
        onChange={onChange}
        value={value}
        locale={"es-ES"}
        className={styles.calendar}
            />
    </section>
  );
}

export default Calendario;
