import { FaMusic, FaSearch, FaTv } from "react-icons/fa";
import styles from "./styles.module.scss";
export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <div className={styles.listContent}>
              <li className={styles.item}>
                <span>
                  <FaTv />
                </span>
              </li>
              <li className={styles.item}>Following</li>
            </div>
            <div className={styles.listContent}>
              <li className={styles.item}>For You</li>
              <li className={styles.item}>
                <span>
                  <FaSearch />
                </span>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p className={styles.footerParagraph}>
          <span>
            <FaMusic />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempora.
        </p>
      </footer>
    </div>
  );
};
