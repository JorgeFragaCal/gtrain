import styles from "styles/AlertDelete.module.scss";
import { deleteItem } from "utils/client";
import { useState } from "react";
import { useRouter } from "next/router";

function AlertDelete({ display, setOpen, id }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const deleteWod = () => {
    deleteItem(id)
    setLoading(true);
    setTimeout(() => {
      router.reload(window.location.pathname);
    }, 2000);
  };

  return (
    <div className={`${styles.container}`}>
      Seguro que quieres borrar
      <div className={styles.buttons}>
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
          <>
            <button className={styles.delete} onClick={deleteWod}>
              SI
            </button>
            <button onClick={setOpen}>NO</button>
          </>
          )}
          </div>
    </div>
  );
}

export default AlertDelete;
