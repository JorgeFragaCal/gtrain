import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import dataMenu from "../data/menu.json";
import { withAuthUser, AuthAction } from "next-firebase-auth";


const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GTrain</title>
        <meta
          name="description"
          content="Tu plataforma de gestion para tu gimnasio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Sidebar
          modules={dataMenu.modules}
          navItems={dataMenu.navItems[0].page_01}
          user={dataMenu.user}
        />
        <section>
          En costruccion
        </section>
      </main>
    </div>
  );
};
export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Home);
