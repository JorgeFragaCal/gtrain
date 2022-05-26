import React, { useState } from "react";

import dataMenu from "data/menu.json";
import styles from "styles/Layout.module.scss";
import style from "styles/Button.module.scss";
import { withAuthUser, AuthAction } from "next-firebase-auth";

import Button from "components/atoms/Button";
import Filter from "components/Filter";
import Form from "components/form/Form";
import GridCardsWods from "components/card/GridCardsWods";
import Sidebar from "components/sidebar/Sidebar";
import Top from "components/Top";
import Link from "next/link";

function WodsList() {
  const [isOpen, setOpen] = useState(false);
  const openForm = () => {
    setOpen(!isOpen);
  };
  return (
    <main>
      <Sidebar
        modules={dataMenu.modules}
        navItems={dataMenu.navItems[1].page_02}
        user={dataMenu.user}
      />
      <section className={styles.container}>
        <Top title={"WODs"} />
        {isOpen === true ? <Form setOpen={setOpen} /> : null}
        <div className={`${styles.container} ${styles.container__buttons}`}>
          <Button onClick={openForm} text={"Crear WOD"} style={"primary"} />
          <Link href={"/wods/calendario"} >
            <a className={style.primary}>Planificar Entrenos</a>
          </Link>
        </div>
        <section className={`${styles.container} ${styles.container__filter}`}>
          <Filter filtros={[]} />
          <GridCardsWods />
        </section>
      </section>
    </main>
  );
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
}) (WodsList);
