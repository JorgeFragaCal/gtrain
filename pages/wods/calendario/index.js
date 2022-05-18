import dataMenu from "../../../data/menu.json";

import styles from "../../../styles/Layout.module.css";

import Calendar from "../../../components/calendar/Calendar"
import Sidebar from "../../../components/Sidebar/Sidebar";
import Top from "../../../components/Top";

function Calendario() {
  return (
    <main>
      <Sidebar
        modules={dataMenu.modules}
        navItems={dataMenu.navItems[1].page_02}
        user={dataMenu.user}
      />
      <section className={styles.container}>
        <Top title={"Calendario"} />
        <Calendar />
      </section>
    </main>
  );
}

export default Calendario;
