import { useEffect, useRef } from "react";
import styles from "./roleGlow.module.css";

const RoleGlow = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cards = wrapper.querySelectorAll(`.${styles.card}`);

    // Attach event listener to the wrapper for mouse movement
    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        // x/y for glow effect
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // glow effect properties
        card.style.setProperty("--x", `${mouseX}px`);
        card.style.setProperty("--y", `${mouseY}px`);

        //  angle for rotation or gradient adjustment
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const angle =
          (Math.atan2(mouseY - centerY, mouseX - centerX) * 160) / Math.PI;

        // Normalize angle and apply to custom property
        card.style.setProperty("--start", `${((angle + 360) % 360) + 40}`);
      });
    };

    wrapper.addEventListener("mousemove", handleMouseMove);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className={styles.header}></div>
      <div className={styles.backgroundOverlay}>
        <div className={styles.cardGlow} ref={wrapperRef}>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <h2 className="uppercase tracking-wider font-light">
                Automatisering og Effektivisering af Udviklingsprocessen
              </h2>
              <p>
                En af de mest markante måder, hvorpå AI påvirker webudvikling i
                dag, er gennem automatisering af rutineopgaver. AI-værktøjer som  "
                <a href="https://github.com/features/copilot">
                  GitHub Copilot
                </a> 
                 " og Tabnine hjælper udviklere med at skrive kode hurtigere og
                mere præcist ved at foreslå kode i realtid. Disse værktøjer
                anvender maskinlæring og store datasæt af eksisterende kode til
                at lære og forudsige, hvilken kode en udvikler muligvis ønsker
                at skrive næste gang.
              </p>
              <br />
              <p>
                AI kan også hjælpe med at automatisere testprocesser. I stedet
                for at bruge tid på manuel fejlfinding og testning, kan
                AI-drevne værktøjer analysere og rette fejl i koden automatisk,
                hvilket sparer udviklere tid og sikrer, at koden er fejlfri, før
                den når brugeren. Dette betyder, at udviklere kan fokusere mere
                på de kreative og komplekse opgaver, som AI ikke kan håndtere på
                samme niveau.
              </p>
            

            
              <h2 className="uppercase tracking-wider font-light">
                Forbedring af Brugeroplevelsen (UX/UI)
              </h2>
              <p>
                AI spiller en væsentlig rolle i at forbedre brugeroplevelsen på
                websites. Et eksempel er de AI-drevne chatbots, der bruges på
                mange hjemmesider i dag. Disse chatbots bruger naturlig
                sprogbehandling til at kommunikere med brugerne, besvare
                spørgsmål og tilbyde hjælp i realtid. Dette gør websites mere
                interaktive og hjælper brugerne med at få svar på deres
                spørgsmål hurtigt, uden at de behøver at vente på en
                kundeservice-agent.
              </p>{" "}
              <br />
              <p>
                Derudover kan AI hjælpe med at forbedre design og layout på
                websites. AI-værktøjer som Wix's ADI (Artificial Design
                Intelligence) bruger maskinlæring til at skabe skræddersyede
                webdesigns, der passer til den enkelte brugers behov. Dette gør
                det lettere for både designere og udviklere at skabe
                professionelt udseende websites på kort tid.
              </p>{" "}
              <br />
              <p>
                AI kan også bruges til at analysere data og bruge den viden til
                at tilpasse indholdet på en hjemmeside i realtid. Hvis et
                website for eksempel ser, at en bruger har vist interesse for
                bestemte produkter, kan AI tilpasse indholdet og vise relevante
                anbefalinger. Dette skaber en mere personlig og engagerende
                brugeroplevelse.
              </p>
            
              <h2 className="uppercase tracking-wider font-light">
                AI og SEO (Search Engine Optimization)
              </h2>
              <p>
                AI har også en stor indflydelse på, hvordan websites optimeres
                til søgemaskiner. Med de rette AI-værktøjer kan webudviklere og
                SEO-specialister analysere brugeradfærd og skabe indhold, der er
                mere målrettet og effektivt. AI kan forudsige, hvilke søgeord
                der vil generere mest trafik, og kan optimere indholdet
                derefter.
              </p>{" "}
              <br />
              <p>
                Desuden hjælper AI med at forstå søgemaskinernes algoritmer.
                AI-værktøjer som Clearscope og Surfer SEO bruger maskinlæring
                til at analysere de bedste resultater for bestemte søgninger og
                foreslår optimeringer for at forbedre rangeringen af en
                hjemmeside.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.circles}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default RoleGlow;
