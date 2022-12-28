import { ActionBar } from "../ActionBar";
import { Description } from "../Description";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./styles.module.scss";
import { LogicVideo } from "./LogicVideo";
export const Video = ({ source, poster }) => {
  const { btnRef, videoRef, togglePlay } = LogicVideo();
  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        loop
        poster={poster}
        ref={videoRef}
        onClick={togglePlay}>
        <source src={source} type="video/mp4" />
      </video>
      <button className={styles.btnPlay} onClick={togglePlay} ref={btnRef}>
        <FaPlayCircle />
      </button>
      <ActionBar
        ProfileImg="https://picsum.photos/200"
        commentsCount={10}
        likesCount={20}
        sharesCount={3}
      />
      <Description />
    </div>
  );
};
