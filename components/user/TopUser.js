import styles from "styles/User.module.scss";

import Calendar from "components/user/Calendar";
import Char from "components/user/Char";
import UserInfo from "components/user/UserInfo";

function TopUser() {
  return (
    <section className={styles.container}>
      <UserInfo />
      <Calendar />
      <Char />
    </section>
  );
}

export default TopUser;
