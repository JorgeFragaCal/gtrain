import styles from "styles/Button.module.scss";
function Button({ text, type, onClick }) {
  return (
    <button onClick={onClick} className={styles[type]}>
      {text}
    </button>
  );
}
export default Button;
