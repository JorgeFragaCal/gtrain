import { useRouter } from "next/router";

import styles from "styles/Sidebar.module.scss";

import Image from "next/image";
import Link from "next/link";
function SidebarRow({ icon, title, url, alt }) {
  const router = useRouter();
  return (
    <Link href={`/${url}`}>
      <a>
        <div
          className={`${styles.button}
          ${router.asPath == `/${url}` ? styles.buttonActive : ""}`}
        >
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
