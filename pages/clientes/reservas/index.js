import { withAuthUser, AuthAction } from "next-firebase-auth";
import dataMenu from "data/menu.json";
import styles from "styles/Layout.module.scss";
import Head from "next/head";
import Filter from "components/Filter";
import Sidebar from "components/sidebar/Sidebar";
import Table from "components/table/Table";
import Top from "components/Top";

const Reservas = () => {
  return (
    <div >
      <Head>
        <title>GTrain</title>
        <meta
          name="description"
          content="Tu plataforma de gestion para tu gimnasio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main>
        <Sidebar
          modules={dataMenu.modules}
          navItems={dataMenu.navItems[2].page_03}
          user={dataMenu.user}
        />
        <section className={styles.container}>
          <Top title={"Usuarios"} />
          <Filter filtros={["Hoy", "9:30"]} />
          <Table />
        </section>
     </main>
    </div>
  );
};
export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Reservas);
