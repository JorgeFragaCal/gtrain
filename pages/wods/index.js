import GridCards from "../../components/card/GridCards";
import Filter from "../../components/Filter";
import Sidebar from "../../components/Sidebar/Sidebar";
import Top from "../../components/Top";
import dataMenu from "../../data/menu.json";
import styles from "../../styles/Layout.module.css";
function WodsList() {
  return (
    <main>
      <Sidebar
        modules={dataMenu.modules}
        navItems={dataMenu.navItems[1].page_02}
        user={dataMenu.user}
      />
      <section className={styles.container}>
        <Top title={"WODs"} />
        <section className={styles.containerContentFilter}>
          <Filter />
          <GridCards />
        </section>
      </section>
    </main>
  );
}

export default WodsList;
