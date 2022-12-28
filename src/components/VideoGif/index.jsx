import styles from "./styles.module.scss";

export const VideoGif = () => {
  return (
    <div className={styles.videoGif}>
      <img src="https://picsum.photos/100/300" alt="video random" />
      <p className={styles.views}>123K</p>
    </div>
  );
};
