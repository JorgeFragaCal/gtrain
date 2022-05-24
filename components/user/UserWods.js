import styles from "../../styles/User.module.scss";

function UserWods({ disable, alert, img, name, score }) {
  return (
    <div>
      <div
        className={`${styles.imgWod}
            ${disable ? styles.imgWodDisable : ""}
            ${alert ? styles.imgWodAlert : ""}
            `}
        style={{
          backgroundImage: "url(" + `${img}` + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <p>{name}</p>
      <p> {score ? score.map((e) => e.weigth + ' / ') : null}</p>
    </div>
  );
}

export default UserWods;
