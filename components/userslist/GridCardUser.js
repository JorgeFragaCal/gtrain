import { useState, useEffect } from "react";

import styles from "styles/CardUser.module.scss";

import CardUser from "components/userslist/CardUser";
import { getData } from "utils/client";

function GridCardsUsers() {
  const [userList, setUserListInfo] = useState([]);
  useEffect(() => {
    getData("usuarios")
      .then((data) => {
        setUserListInfo(data);
      })
      .catch(console.log("mal"));
  }, []);
  return (
    <section className={styles.gridCards}>
      {userList.map((i) => (
        <CardUser key={i.email} data={i} />
      ))}
    </section>
  );
}

export default GridCardsUsers;
