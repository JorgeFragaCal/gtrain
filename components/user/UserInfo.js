import styles from "styles/User.module.scss";

import { useAuthUser, withAuthUser } from "next-firebase-auth";
import Image from "next/image";

function UserInfo({user}) {
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
        <i>Editar</i>
        <i>Eliminar</i>
      </div>
      <div>
        <h3>{AuthUser.displayName}</h3>
        <p>{AuthUser.email}</p>
        <p>{AuthUser.phoneNumber}</p>
        <p>Nº de Reservas disponibles</p>
        <p>{user.bonos}/10</p>
      </div>
    </section>
  );
}

export default UserInfo;
