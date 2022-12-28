import { VideoGif } from "../VideoGif";
import styles from "./styles.module.scss";

export const VideoGrid = () => {
  return (
    <ul className={styles.videoGrid}>
      <li>
        <VideoGif />
      </li>
      <li>
        <VideoGif />
      </li>
      <li>
        <VideoGif />
      </li>
      <li>
        <VideoGif />
      </li>
      <li>
        <VideoGif />
      </li>
      <li>
        <VideoGif />
      </li>
      <li>
        <VideoGif />
      </li>
      <li>
        <VideoGif />
      </li>
      <li>
        <VideoGif />
      </li>
      <li>
        <VideoGif />
      </li>
    </ul>
  );
};
