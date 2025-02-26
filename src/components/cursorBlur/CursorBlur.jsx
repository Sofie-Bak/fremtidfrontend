import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorBlur() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 150, // Center the blur effect
        y: e.clientY - 150,
        duration: 0.2, // Smooth timing
        ease: "power2.out", // Natural ease
      });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-50 top-0 left-0 w-[300px] h-[300px] bg-sky-900 opacity-50 blur-[100px] rounded-full pointer-events-none mix-blend-difference"
    />
  );
}
