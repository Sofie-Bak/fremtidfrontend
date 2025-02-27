import styles from "./parallaxStars.module.scss";

const ParallaxStars = () => {
  return (
    <div className={styles.starContainer}>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
    </div>
  );
};

export default ParallaxStars;
