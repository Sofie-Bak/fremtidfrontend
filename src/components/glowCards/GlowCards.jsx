import GlowBtn from "../glowBtn/GlowBtn";
import styles from "./glowCards.module.css";
import { Link } from "react-router-dom";


const GlowCards = ({ title, content, buttonLink }) => {
  return (
    <section className="flex items-center justify-center relative">
      <div className="absolute">
        <div className={styles.card}>
          {/* Content placed on top of the card */}
          <div className={styles.cardContent}>
            <h2>{title}</h2>
            <p>{content}</p>
            <Link to={buttonLink}>
              <GlowBtn />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlowCards;
