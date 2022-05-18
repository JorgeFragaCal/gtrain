import styles from "../../styles/Button.module.scss";
function Button({ text, type }) {
  return <button className={styles[type]}>{text}</button>;
}
export default Button;
