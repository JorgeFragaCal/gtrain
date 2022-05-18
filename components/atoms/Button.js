import styles from "../../styles/Button.module.css";
function Button({ text, type }) {
  return <button className={styles[type]}>{text}</button>;
}
export default Button;
