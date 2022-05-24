import styles from "styles/User.module.scss";

import UserWods from "components/user/UserWods";

let alert,
  disable = false;

export const getTimeWithoutTraining = (exercices) => {
  exercices.forEach((e) => {
    if (e.score !== null) {
      const score = e.score.slice(e.score.length - 2);
      const timeWithoutTraining = score.reduce((acc, obj) => {
        return obj.date.seconds - acc;
      }, 0);

      if (timeWithoutTraining >= 2629743) {
        alert = true;
      } else {
        alert = false;
      }
    } else {
      disable = true;
    }
  });
};


function GridCardUserWods({ exercices }) {
  //getTimeWithoutTraining(exercices);
  return (
    <section className={styles.gridUserWods}>
      {exercices.map((i) => (
        <UserWods key={i} disable={disable} alert={alert} img={i.image} name={i.name} score={i.score}/>
      ))}
    </section>
  );
}

export default GridCardUserWods;
