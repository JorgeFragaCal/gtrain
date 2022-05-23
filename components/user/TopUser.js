import styles from "styles/User.module.scss";

import Calendar from "components/user/Calendar";
import Char from "components/user/Char";
import UserInfo from "components/user/UserInfo";

function TopUser({user}) {
  return (
    <section className={styles.container}>
      <UserInfo user={user}/>
      <Calendar />
      <Char />
    </section>
  );
}

export default TopUser;
