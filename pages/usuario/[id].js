import dataMenu from "data/menu.json";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { withAuthUser, AuthAction, useAuthUser } from "next-firebase-auth";

import styles from "styles/Layout.module.scss";

import Filter from "components/Filter";
import GridCardUserWods from "components/user/GridCardUserWods";
import Sidebar from "components/sidebar/Sidebar";
import Top from "components/Top";
import TopUser from "components/user/TopUser";

import { getUserInfo } from "utils/client";

function Usuario() {
  const id = useRouter().query.id;
  const [user, setUserInfo] = useState({
    id: "",
    age: "",
    bonos: "",
    condition: "",
    direction: "",
    exercices: [],
    image: "",
    payments: [],
    reservations: [],
    type: "",
  });

  useEffect(() => {
    if (id) {
      getUserInfo(id)
        .then((data) =>
          setUserInfo({
            id: data.id,
            age: data.age,
            bonos: data.bonos,
            condition: data.condition,
            direction: data.direction,
            exercices: data.exercices,
            image: data.image,
            payments: data.payments,
            reservations: data.reservations,
            type: data.type,
          })
        )
        .catch((error) => console.log("El usuario no existe" + error.message));
    }
  }, [id]);

  const filtros=['Dominados','Sin practicar','No aprendidas']

  return (
    <main>
      <Sidebar
        modules={dataMenu.modules}
        navItems={dataMenu.navItems[2].page_03}
        user={dataMenu.user}
      />

      <section className={`${styles.container} ${styles.container__user}`}>
        <Top title={"Perfil de Cliente"} />
        <TopUser user={user} />
        <Filter filtros={filtros} />
        <GridCardUserWods exercices={user.exercices} />
      </section>
    </main>
  );
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Usuario);
