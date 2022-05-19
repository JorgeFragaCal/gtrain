import styles from "styles/User.module.scss";

function UserWods({ disable, alert }) {
  const img =
    "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/deadlift.gif?crop=0.765xw:1.00xh;0.169xw,0&resize=320:*";
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
