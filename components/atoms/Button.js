import styles from "styles/Button.module.scss";
import Image from "next/image";

function Button({ text, type, onClick, icon }) {
  return (
    <button onClick={onClick} className={styles[type]}>
      {icon ? <Image alt="" src={icon} width="40" height="40"></Image> : null}
      {text}
    </button>
  );
}
export default Button;
