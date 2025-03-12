import { animateScroll as scroll } from "react-scroll";

const ToTopBtn = () => {
  const scrollToTop = () => {
    const container = document.getElementById("scroll-container");

    if (container) {
      // If the scroll container exists scroll it
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Otherwise default react-scroll behavior
      scroll.scrollToTop({ duration: 500, smooth: "easeInOutQuart" });
    }
  };

  return (
    <div className="absolute z-88 right-10 bottom-5">
      <button
        onClick={scrollToTop}
        className="cursor-pointer relative after:content-['scroll_to_top'] after:text-white/70 after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-12 h-12 rounded-full border border-2 border-teal-200 bg-black/20 pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90"
      >
        <svg
          className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12"
          viewBox="0 0 384 512"
        >
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ToTopBtn;
