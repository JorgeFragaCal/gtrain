import usersList from "../../data/lista_usuarios.json";

import styles from "../../styles/CardUser.module.scss";

import CardUser from "./CardUser";

function GridCardsUsers() {
  return (
    <section className={styles.gridCards}>
      {usersList.list_of_users.map((i) => (
        <CardUser key={i.id} data={i} />
      ))}
    </section>
  );
}

export default GridCardsUsers;
