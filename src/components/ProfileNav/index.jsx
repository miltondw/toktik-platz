import styles from "./styles.module.scss";

export const ProfileNav = () => {
  return (
    <nav className={styles.profileNav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="/">TokTiks</a>
        </li>
        <li className={styles.item}>
          <a href="/">Likes</a>
        </li>
      </ul>
    </nav>
  );
};
