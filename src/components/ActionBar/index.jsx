import { useState } from "react";
import { FaHeart, FaComment, FaShare, FaPlus } from "react-icons/fa";
import styles from "./styles.module.scss";
export const ActionBar = ({
  ProfileImg,
  likesCount,
  commentsCount,
  sharesCount,
}) => {
  const [active, setActive] = useState(false);
  const [likes, setLikes] = useState(likesCount);
  const [comments, setComments] = useState(commentsCount);
  const [shares, setShares] = useState(sharesCount);
  const handleLike = () => {
    setActive(!active);
    if (!active) {
      setLikes(likes + 1);
    } else {
      setLikes(likesCount);
    }
  };
  return (
    <ul className={styles.listaActionBar}>
      <li className={styles.items}>
        <img
          className={styles.profileImg}
          src={ProfileImg}
          alt="Profile Image"
        />
        <span className={styles.iconPlus}>
          <FaPlus />
        </span>
      </li>
      <li className={styles.items}>
        <button
          className={active ? styles.colorActive : ""}
          onClick={handleLike}>
          <FaHeart />
        </button>
        <p className={styles.numbers}> {likes} </p>
      </li>
      <li className={styles.items}>
        <button>
          <FaComment />
        </button>
        <p className={styles.numbers}> {comments} </p>
      </li>
      <li className={styles.items}>
        <button>
          <FaShare />
        </button>
        <p className={styles.numbers}> {shares} </p>
      </li>
    </ul>
  );
};
