import dataMenu from "../../data/menu.json";

import { withAuthUser, AuthAction } from "next-firebase-auth";

import styles from "../../styles/Layout.module.scss";

import Filter from "../../components/Filter";
import Sidebar from "../../components/Sidebar/Sidebar";
import Top from "../../components/Top";
import TopUser from "../../components/user/TopUser";
import GridCardUserWods from "../../components/user/GridCardUserWods";

function Usuario() {
  return (
    <main>
      <Sidebar
        modules={dataMenu.modules}
        navItems={dataMenu.navItems[2].page_03}
        user={dataMenu.user}
      />
      <section className={`${styles.container} ${styles.container__user}`}>
        <Top title={"Nombre Usuario"} />
        <TopUser />
        <Filter />
        <GridCardUserWods />
      </section>
    </main>
  );
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Usuario);
