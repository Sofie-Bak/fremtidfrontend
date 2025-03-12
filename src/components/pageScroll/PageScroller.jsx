import { useState, useEffect, useRef } from "react";
import { Link, Element } from "react-scroll";
import styles from "./pageScroller.module.css";
import GlowCards from "../glowCards/GlowCards";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../footer/Footer";


const PageScroller = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // sections array to include title, content, and buttonLink
  const sections = [
    {
      title: "AI's rolle i webudvikling i dag",
      content:
        "I dag er AI allerede en vigtig del af webudvikling, selvom mange måske ikke er opmærksomme på det.",
      buttonLink: "/aiRole",
    },
    {
      title: "Fordele ved AI for webudviklere",
      content:
        "En af de største fordele ved AI i webudvikling er, at det kan automatisere en række tidskrævende opgaver.",
      buttonLink: "/page2",
    },
    {
      title: "Ulemper ved AI i webudvikling",
      content:
        "Selvom AI tilbyder mange fordele, er der også nogle ulemper ved at implementere teknologien i webudvikling.",
      buttonLink: "/page3",
    },
    {
      title: "Hvordan AI kan ændre webudvikling i fremtiden",
      content:
        "I fremtiden er det sandsynligt, at AI vil spille en endnu større rolle i webudvikling.",
      buttonLink: "/page4",
    },
  ];

  const sectionRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // 50% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setCurrentPage(index + 1);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sectionRefs.current.forEach((ref) => observer.observe(ref));

    return () => {
      sectionRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, []);

  return (
    <div id="scroll-container" className={styles.container}>
      {/* Sidebar with Navigation Dots & Arrows */}
      <div className={styles.sidebar}>
        {/* Up Arrow */}
        <Link
          to={`section${currentPage - 1}`}
          containerId="scroll-container"
          smooth={true}
          duration={500}
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
          className={styles.navArrow}
        >
          <IoIosArrowUp />
        </Link>

        {/* Navigation Dots with Labels */}
        {sections.map((section, index) => (
          <div key={index} className={styles.dotWrapper}>
            <Link
              to={`section${index + 1}`}
              containerId="scroll-container"
              smooth={true}
              duration={500}
              className={styles.dotLink}
            >
              <div
                className={`${styles.dot} ${
                  currentPage === index + 1 ? styles.activeDot : ""
                }`}
              ></div>
            </Link>
            <span className={styles.sidebarLabel}>{section.title}</span>
          </div>
        ))}

        {/* Down Arrow */}
        <Link
          to={`section${currentPage + 1}`}
          containerId="scroll-container"
          smooth={true}
          duration={500}
          onClick={() => {
            if (currentPage < sections.length) setCurrentPage(currentPage + 1);
          }}
          className={styles.navArrow}
        >
          <IoIosArrowDown />
        </Link>
      </div>

      {/* Page Sections */}
      {sections.map((section, index) => (
        <Element
          key={index}
          name={`section${index + 1}`}
          className={`${styles.section} ${styles[`background${index + 1}`]}`}
        >
          {/* Wrap content in a div with a ref for intersection observer */}
          <div ref={addToRefs} className={styles.content}>
            <GlowCards
              title={section.title}
              content={section.content}
              buttonLink={section.buttonLink}
            />
          </div>
        </Element>
      ))}
      <Footer/>
    </div>
  );
};

export default PageScroller;
