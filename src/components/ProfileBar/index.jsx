import styles from "./styles.module.scss";

export const ProfileBar = ({
  name = "miltondw",
  img = "https://picsum.photos/53",
  followers,
  likes,
  following,
}) => {
  return (
    <div className={styles.profile}>
      <img className={styles.profileImg} src={img} alt={name} />
      <ul className={styles.list}>
        <li className={styles.item}>
          <p>10.2K</p>
          <p>Followers</p>
        </li>
        <li className={styles.item}>
          <p>1K</p>
          <p>following</p>
        </li>
        <li className={styles.item}>
          <p>8.9K</p>
          <p>Likes</p>
        </li>
      </ul>
    </div>
  );
};
