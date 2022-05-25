import usersList from "data/lista_usuarios.json";
import { useState, useEffect } from "react";

import styles from "styles/CardUser.module.scss";

import CardUser from "components/userslist/CardUser";
import { getUsersList } from "utils/client";

function GridCardsUsers() {
  const [user, setUserInfo] = useState([]);
  useEffect(() => {
    getUsersList("usuarios")
      .then((data) => {
        setUserInfo(data);
      })
      .catch(console.log("mal"));
  }, []);
  return (
    <section className={styles.gridCards}>
      {user.map((i) => (
        <CardUser key={i.email} data={i} />
      ))}
    </section>
  );
}

export default GridCardsUsers;
