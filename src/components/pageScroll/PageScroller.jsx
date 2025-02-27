import { useState, useEffect, useRef } from "react";
import { Link, Element } from "react-scroll";
import styles from "./pageScroller.module.css";

const PageScroller = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const sections = [
    "Section 1",
    "Section 2",
    "Section 3",
    "Section 4",
    "Section 5",
  ];

  // We'll store refs to each section's content
  const sectionRefs = useRef([]);

  // This function adds refs to our array.
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
          // Find the index of the intersecting element.
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
    // Scrolling container with an ID for react-scroll links
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
          ↑
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
            <span className={styles.sidebarLabel}>{section}</span>
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
          ↓
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
            <h2>{section}</h2>
            <p>Content for {section}. You can write about your subject here.</p>
            <button
              onClick={() => (window.location.href = `/page${index + 1}`)}
            >
              Go to Page {index + 1}
            </button>
          </div>
        </Element>
      ))}
    </div>
  );
};

export default PageScroller;
