import { ActionBar } from "../ActionBar";
import { Description } from "../Description";
import styles from "./styles.module.scss";
export const Video = ({ source }) => {
  return (
    <div className={styles.container}>
      <img src={source} alt="video" />
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
