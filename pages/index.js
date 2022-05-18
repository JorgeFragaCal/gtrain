import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import dataMenu from "../data/menu.json";
import Form from "../components/form/Form";

export default function Home() {
  console.log(dataMenu.navItems[0].page_01);
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
        
        </section>
      </main>
    </div>
  );
}
