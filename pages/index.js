import Head from "next/head";
import dataMenu from "../data/menu.json";
import styles from "styles/Layout.module.scss";
import Sidebar from "../components/sidebar/Sidebar";
import { withAuthUser, AuthAction } from "next-firebase-auth";
import Top from "components/Top";
import ListWodsHome from "components/card/ListWodsHome";
import Places from "components/places/Places";
import ListClients from "components/listRegisteredClients/ListClients";
import ListMessajes from "components/mesajes/ListMesajes";

const Home = () => {
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Augosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Deciembre",
  ];
  const year = new Date().getFullYear();
  const month = monthNames[new Date().getMonth()];
  return (
    <div>
      <Head>
        <title>GTrain</title>
        <meta
          name="description"
          content="Tu plataforma de gestion para tu gimnasio"
        />
        <link rel="icon" href="/logo-gtrain-azul.svg" />
      </Head>

      <main>
        <Sidebar
          modules={dataMenu.modules}
          navItems={dataMenu.navItems[0].page_01}
          user={dataMenu.user}
        />
        <section className={styles.container}>
          <Top title={`${month}-${year}`} />
          <ListWodsHome />
          <section className={styles.bottonContainer}>
            <Places />
            <ListClients />
            <ListMessajes />
          </section>
        </section>
      </main>
    </div>
  );
};
export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Home);
