import dataMenu from "data/menu.json";

import styles from "styles/Layout.module.scss";

import { withAuthUser, AuthAction } from "next-firebase-auth";

import Filter from "components/Filter";
import GridCardsUsers from "components/userslist/GridCardUser";
import Sidebar from "components/sidebar/Sidebar";
import Top from "components/Top";

function Usuarios() {
  return (
    <main>
      <Sidebar
        modules={dataMenu.modules}
        navItems={dataMenu.navItems[2].page_03}
        user={dataMenu.user}
      />
      <section className={styles.container}>
        <Top title={"Usuarios"} />
        <Filter filtros={['Nuevos','Activos','Inactivos']}/>
        <GridCardsUsers />
      </section>
    </main>
  );
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Usuarios);
