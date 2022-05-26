import styles from "styles/Button.module.scss";
import Image from "next/image";

function Button({ text, style, onClick, icon }) {
  return (
    <button onClick={onClick} className={styles[style]}>
      {icon ? <Image alt="" src={icon} width="40" height="40"></Image> : null}
      {text}
    </button>
  );
}
export default Button;
