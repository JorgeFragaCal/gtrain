import Head from "next/head";
import styles from "styles/App.module.scss";
import { withAuthUser, AuthAction } from "next-firebase-auth";
import ListWodsHome from "components/card/ListWodsHome";
import TopApp from "components/TopApp";
import BottonApp from "components/BottonApp";

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

        <section className={styles.container}>
          <TopApp/>
          <ListWodsHome />
          <BottonApp/>
        </section>
      
    </div>
  );
};
export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Home);
