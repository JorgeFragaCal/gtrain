import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar() {
  const events = [
    { title: "AMANDA", date: "2022-05-10", color: "#ef5da8" },
    { title: "SANDRA", date: "2022-05-12", color: "#ff7a00" },
    { title: "LARA", date: "2022-05-22", color: "#659b8f" },
    { title: "DIANA", date: "2022-05-23", color: "#6644ff" },
  ];
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
      events={events}
      eventColor={"#FF7A00"}
      eventDisplay={"auto"}
      eventClassNames={"myclassname"}
    />
  );
}

export default Calendar;
