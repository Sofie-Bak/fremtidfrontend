import styles from "./header.module.css";
import Globe from "../../assets/globe.svg";
import circleText from "../../assets/textSvgAi.svg";

const Header = () => {
  return (
    <>
      <header className="block h-screen">
        <div className={styles.container}>
          
          {/* MAIN SECTION */}
          <div className={styles.rightFlex}>
            <div className={styles.headerMain}>
              <div className={styles.headerBack}>
                <div></div>
              </div>
              <div className={styles.headerTitle}>
                <div className={styles.headerTitle1}>
                  <h2>Fremtid</h2>
                  <span></span>
                  <h3>Frontend</h3> <br />
                  <div className={styles.headerSub}>
                    <b>AI og Webudvikling:</b> Hvordan Kunstig Intelligens
                    <br /> Former Fremtidens Websites
                  </div>
                </div>
                <img className={styles.globe} src={Globe} alt="svg globe" />
              </div>
            </div>
            {/* PANEL SECTION */}
            <div className={styles.panel}>
              <div className={styles.panelTxt}>
                <div>
                  <div className={styles.title}>
                    <span>AI og Webudvikling</span>
                    AI og Webudvikling
                  </div>
                  <div className={styles.msg}>
                    <p>
                      AI spiller en stadig større rolle i webudvikling og ændrer
                      måden, vi designer, udvikler og optimerer websites på. Fra
                      automatiseret kodning til personaliserede brugeroplevelser
                      og AI-drevne chatbots – teknologien gør det muligt at
                      arbejde hurtigere, smartere og mere effektivt.
                    </p>
                    <br />
                    <p>
                      Men hvilke fordele og udfordringer bringer AI med sig, og
                      hvordan vil det påvirke webudvikling i fremtiden? Dyk ned i
                      AI’s indflydelse på branchen og se, hvordan udviklere kan
                      udnytte potentialet uden at miste den kreative kontrol.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className={styles.textSvg}
                    src={circleText}
                    alt="circular text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
