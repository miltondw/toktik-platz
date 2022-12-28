import styles from "./styles.module.scss";

export const Description = () => {
  return (
    <div className={styles.description}>
      <p className={styles.profile}>@Profile</p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia mollitia
        recusandae, tenetur saepe animi obcaecati voluptates vitae, pariatur in
      </p>
      <p className={styles.date}>20 hours ago</p>
    </div>
  );
};
