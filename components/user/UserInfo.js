import styles from "styles/User.module.scss";

import { useAuthUser, withAuthUser } from "next-firebase-auth";
import Image from "next/image";

function UserInfo({ user }) {
  const AuthUser = useAuthUser();
  return (
    <section className={styles.userInfo}>
      <div>
        {AuthUser.photoURL ? (
          <Image
            src={AuthUser.photoURL}
            alt="Settings"
            width="125"
            height="125"
          />
        ) : null}
        <div className={styles.icons}>
          <i>Editar</i>
          <i>Eliminar</i>
        </div>
      </div>
      <div>
        <h3>{AuthUser.displayName}</h3>
        <p>{AuthUser.email}</p>
        <p>{AuthUser.phoneNumber}</p>
        <strong>Nº de Reservas disponibles</strong>
        <p>{user.bonos}/10</p>
        <strong>Dirección</strong>
        <p>{user.direction}</p>
        <strong>Condición</strong>
        <p>{user.condition}</p>
      </div>
    </section>
  );
}

export default UserInfo;
