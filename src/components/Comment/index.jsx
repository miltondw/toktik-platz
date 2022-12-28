import { FaHeart } from "react-icons/fa";
import styles from "./styles.module.scss";

export const Comment = ({ profilePic, content, likes, date, user }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <img src={profilePic} alt={user} />
        <span>@{user}</span>
      </div>
      <div className={styles.main}>
        <p>{content}</p>
        <button>
          <FaHeart />
          {likes}
        </button>
      </div>
      <p className={styles.date}>{date}</p>
    </div>
  );
};
