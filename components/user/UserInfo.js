import styles from "styles/User.module.scss";

import Image from "next/image";

function UserInfo({ user }) {
  return (
    <section className={styles.userInfo}>
      <div className={styles.userImage}>
        {user.photoURL ? (
          <Image
            src={`${user.photoURL}`}
            alt={user.name}
            width="125"
            height="125"
          />
        ) : (
          <Image src="/LogoLogin.jpg" alt="Settings" width="125" height="125" />
        )}
        <div className={styles.icons}>
          <i>Editar</i>
          <i>Eliminar</i>
        </div>
      </div>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.phoneNumber}</p>
        <strong>Nº de Reservas disponibles</strong>
        <p>{user.bonos}/12</p>
        <strong>Dirección</strong>
        <p>{user.direction}</p>
        <strong>Condición</strong>
        <p>{user.condition}</p>
      </div>
    </section>
  );
}

export default UserInfo;
