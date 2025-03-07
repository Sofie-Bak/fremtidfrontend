import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className="block h-screen">
        <div className={styles.container}>
          {/* SIDE PANEL */}
          <div className={styles.headerSide}>
            <div className={styles.sideBack}>
              <div></div>
            </div>
            <div className={styles.sideFront}>
              <h2 className="uppercase tracking-wider">Velkommen</h2>
            </div>
          </div>
          {/* MAIN SECTION */}
          <div className={styles.headerMain}>
            <div className={styles.headerBack}>
              <div></div>
            </div>
            <h2>Fremtid</h2>
            <span></span>
            <h2>Frontend</h2> <br />
            <div className={styles.headerSub}>
              AI og Webudvikling:
              <span>
                Hvordan Kunstig Intelligens Former Fremtidens Websites
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
