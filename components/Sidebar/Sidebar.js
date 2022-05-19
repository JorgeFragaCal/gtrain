import styles from "styles/Sidebar.module.scss";

import { useAuthUser, withAuthUser } from "next-firebase-auth";

import Image from "next/image";
import Link from "next/link";

import SidebarRow from "components/sidebar/SidebarRow";
import { googleSignOut } from "components/auth/FirebaseAuth";

function Sidebar({ modules, navItems, user }) {
  const AuthUser = useAuthUser();
  return (
    <aside className={styles.navigation}>
      <div className={styles.moduleBar}>
        <Link href="/">
          <a>
            <div className={styles.moduleBarLogo}>
              <Image
                src="/Weightlifting.svg"
                alt="Settings"
                width="40"
                height="40"
              />
            </div>
          </a>
        </Link>
        <div className={styles.modules}>
          {modules.map((i) => (
            <SidebarRow
              key={i.url}
              alt={i.alt}
              title={i.title}
              icon={i.icon}
              url={i.url}
            />
          ))}
        </div>
        <div className={styles.moduleBarSettings}>
          <Image
            src="/Weightlifting.svg"
            alt="Settings"
            width="40"
            height="40"
            onClick={googleSignOut}
          />
        </div>
      </div>
      <div className={styles.moduleNav}>
        <div className={styles.moduleNavUserInfo}>
          <Image src={`/${user.img}`} alt="Settings" width="50" height="50" />
          <span>{AuthUser.displayName}</span>
        </div>
        {navItems.map((i) => (
          <SidebarRow
            key={i.url}
            alt={i.alt}
            title={i.title}
            url={i.url}
            icon={i.icon}
          />
        ))}
      </div>
    </aside>
  );
}

export default withAuthUser()(Sidebar);
