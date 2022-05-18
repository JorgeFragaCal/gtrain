import SidebarRow from "./SidebarRow";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Sidebar.module.scss";
function Sidebar({ modules, navItems, user }) {
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
          />
        </div>
      </div>
      <div className={styles.moduleNav}>
        <div className={styles.moduleNavUserInfo}>
          <Image src={`/${user.img}`} alt="Settings" width="50" height="50" />
          <span>{user.name}</span>
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

export default Sidebar;
