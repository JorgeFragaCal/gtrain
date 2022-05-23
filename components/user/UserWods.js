import styles from "../../styles/User.module.scss";

function UserWods({ disable, alert,img }) {

  return (
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
  );
}

export default UserWods;
