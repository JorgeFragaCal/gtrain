import styles from "styles/Calendar.module.scss";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{ center: "prev,title,next", left: null, right: null }}
      locale={"es"}
      height={"auto"}
      contentHeight={"auto"}
      fixedWeekCount={false}
      firstDay={1}
    />
  );
}

export default Calendar;
