import React, { useState } from "react";

import dataMenu from "data/menu.json";
import styles from "styles/Layout.module.scss";

import { withAuthUser, AuthAction } from "next-firebase-auth";

import Button from "components/atoms/Button";
import Filter from "components/Filter";
import Form from "components/form/Form";
import GridCardsWods from "components/card/GridCardsWods";
import Sidebar from "components/sidebar/Sidebar";
import Top from "components/Top";

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
        {isOpen === true ? <Form /> : null}
        <div className={`${styles.container} ${styles.container__buttons}`}>
          <Button onClick={openForm} text={"Crear WOD"} type={"primary"} />
          <Button text={"Planificar Entrenos"} type={"primary"} />
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
