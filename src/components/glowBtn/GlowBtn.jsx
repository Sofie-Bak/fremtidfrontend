import styles from "./glowBtn.module.css"

const GlowBtn = () => {
  return (
    <button type="button" className={styles.btn}>
      <strong>LÆS MERE</strong>
      <div className={styles.containerStars}>
        <div className={styles.stars}></div>
      </div>

      <div className={styles.glow}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </button>
  );
};

export default GlowBtn;
