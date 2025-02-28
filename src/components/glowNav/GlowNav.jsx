import styles from "./glowNav.module.css";

const GlowNav = () => {
  return (
    <nav className="flex justify-center mt-[10px]">
        <div className={styles.nav}>
          <div className={styles.container}>
            <div className={styles.btn}>AI's rolle</div>
            <div className={styles.btn}>fordele</div>
            <div className={styles.btn}>ulemper</div>
            <div className={styles.btn}>fremtiden</div>
    
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 60"
              height="60"
              width="400"
              overflow="visible"
              className={styles.outline}
            >
              <rect
                strokeWidth="5"
                fill="transparent"
                height="60"
                width="400"
                y="0"
                x="0"
                pathLength="100"
                className={styles.rect}
              ></rect>
            </svg>
    
            <div className={styles.containerStars}>
            </div>
    
            <div className={styles.glow}>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default GlowNav;
