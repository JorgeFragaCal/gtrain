import styles from "../../styles/User.module.scss";

import Calendar from "./Calendar";
import Char from "./Char";
import UserInfo from "./UserInfo";

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
