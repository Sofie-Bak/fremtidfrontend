import { Link } from "react-scroll";
import styles from "./glowNav.module.css";

const GlowNav = () => {
  return (
    <nav className="flex justify-center">
      <div className="absolute z-100">
        <div className={styles.nav}>
          <div className={styles.container}>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              className={styles.btn}
              containerId="scroll-container" // container id to make sure react scroll knows where to scroll. 
            >
              AI's rolle
            </Link>
            <Link
              to="section2"
              smooth={true}
              duration={500}
              className={styles.btn}
              containerId="scroll-container" 
            >
              Fordele
            </Link>
            <Link
              to="section3"
              smooth={true}
              duration={500}
              className={styles.btn}
              containerId="scroll-container" 
            >
              Ulemper
            </Link>
            <Link
              to="section4"
              smooth={true}
              duration={500}
              className={styles.btn}
              containerId="scroll-container" 
            >
              Fremtiden
            </Link>
  
            <div className={styles.containerStars}></div>
  
            <div className={styles.glow}>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GlowNav;
