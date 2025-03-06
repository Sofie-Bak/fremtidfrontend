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
              containerId="scroll-container" // This ensures scrolling happens inside the container
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
  
            {/* <svg
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
              </svg> */}
  
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
