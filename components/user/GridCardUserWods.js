import styles from "styles/User.module.scss";

import UserWods from "components/user/UserWods";

function GridCardUserWods({ exercices }) {
  return (
    <section className={styles.gridUserWods}>
      {exercices
        ? exercices.map((i) => (
            <UserWods
              key={i.name}
              img={i.image}
              name={i.name}
              score={i.score}
            />
          ))
        : null}
    </section>
  );
}

export default GridCardUserWods;
