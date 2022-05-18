import styles from "../../styles/User.module.scss";

import UserWods from "./UserWods";

function GridCardUserWods() {
  const a = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];
  return (
    <section className={styles.gridUserWods}>
      {a.map((i) => (
        <UserWods key={i} disable={false} alert={true} />
      ))}
    </section>
  );
}

export default GridCardUserWods;
