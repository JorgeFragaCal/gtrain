import styles from "styles/Button.module.scss";
import Image from "next/image";

function Button({ text, style, onClick, icon, loading }) {
  return (
    <button onClick={onClick} className={styles[style]}>
      {icon ? <Image alt="" src={icon} width="40" height="40"></Image> : null}
      {loading ? (
        <svg className={styles.spinner} viewBox="0 0 50 50">
          <circle
            className={styles.path}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      ) : (
        text
      )}
    </button>
  );
}
export default Button;
