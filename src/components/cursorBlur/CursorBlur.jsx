import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorBlur() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 150, // Centers on cursor by picking half of the w and h of the div. 
        y: e.clientY - 150,
        duration: 0.2, // Delays the following to make its feel smoother and fluid.
        ease: "power2.out", // changes ease to whatever feels best from gsap.
      });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[300px] h-[300px] bg-cyan-900 opacity-50 blur-[100px] rounded-full pointer-events-none mix-blend-screen"
    />
  );
}
