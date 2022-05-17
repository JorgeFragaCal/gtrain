import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";
function SidebarRow({ icon, title, url, alt }) {
  return (
    <Link href={`/${url}`}>
      <a>
        <div className={styles.button}>
          {icon ? (
            <Image src={`/${icon}`} width="40" height="40" alt={alt} />
          ) : null}
          {title}
        </div>
      </a>
    </Link>
  );
}

export default SidebarRow;
