import Head from "next/head";
import styles from "styles/Home.module.scss";
import Sidebar from "components/sidebar/Sidebar";
import dataMenu from "data/menu.json";
import { withAuthUser, AuthAction } from "next-firebase-auth";

const Pagos = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GTrain</title>
        <meta
          name="description"
          content="Tu plataforma de gestion para tu gimnasio"
        />
       
      </Head>

      <main className={styles.main}>
        <Sidebar
          modules={dataMenu.modules}
          navItems={dataMenu.navItems[2].page_03}
          user={dataMenu.user}
        />
        <section>En costruccion</section>
      </main>
    </div>
  );
};
export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Pagos);
