import styles from "../../styles/User.module.scss";

function UserInfo() {
  return (
    <section className={styles.userInfo}>
      <div>
        <img
          src="https://minimaltoolkit.com/images/randomdata/male/94.jpg"
          alt=""
        />
        <i>Editar</i>
        <i>Eliminar</i>
      </div>
      <div>
        <h3>Nombre</h3>
        <p>email</p>
        <p>telefono</p>
        <p>Nº de Reservas disponibles</p>
        <p>5/10</p>
      </div>
    </section>
  );
}

export default UserInfo;
