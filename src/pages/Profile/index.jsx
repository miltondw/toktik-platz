import { ProfileBar } from "../../components/ProfileBar";
import { ProfileNav } from "../../components/ProfileNav";
import { VideoGrid } from "../../components/VideoGrid";
import styles from "./styles.module.scss";
export const Profile = () => {
  return (
    <div className={styles.Profile}>
      <ProfileBar />
      <ProfileNav />
      <VideoGrid />
    </div>
  );
};
