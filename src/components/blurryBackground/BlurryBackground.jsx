import React from "react";
import styles from "./blurryBackground.module.css"

export default function BlurryBackground() {
   return (
     <div className={styles.backgroundWrapper}>
       <div className={styles.gradientBg} />
     </div>
   );
}
