import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar() {
  const events = [
    { title: "ELITE", date: "2022-06-10", color: "#ef5da8" },
    { title: "HEAT", date: "2022-06-12", color: "#ff7a00" },
    { title: "KIMAE", date: "2022-06-22", color: "#659b8f" },
    { title: "WARRIOR", date: "2022-06-23", color: "#6644ff" },
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
