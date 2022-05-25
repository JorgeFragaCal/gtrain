import styles from "../../styles/User.module.scss";

function UserWods({ disable, alert, img, name, score }) {
  const lastScore = score !== null ? score.slice(score.length - 2) : [];
  const timeWithoutTraining = lastScore[1]
    ? lastScore[1].date.seconds - lastScore[0].date.seconds
    : null;
  return (
    <div>
      {img ? (
        <div
          className={`${styles.imgWod}
            ${score.length === 0 ? styles.imgWodDisable : ""}
            ${timeWithoutTraining >= 2629743 ? styles.imgWodAlert : ""}
            `}
          style={{
            backgroundImage: "url(" + `${img}` + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      ) : null}
      <p>{name}</p>
      <p> {score ? score.map((e) => e.weigth + " / ") : null}</p>
    </div>
  );
}

export default UserWods;
