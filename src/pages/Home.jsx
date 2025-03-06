import CursorBlur from "../components/cursorBlur/CursorBlur";
import PageScroller from "../components/pageScroll/PageScroller";
import ParallaxStars from "../components/parallaxStars/ParralaxStars";
import ToTopBtn from "../components/toTopBtn/ToTopBtn";

const Home = () => {
  return (
    <>
      <ToTopBtn />
      <ParallaxStars />
      <PageScroller />
      <CursorBlur />
    </>
  );
};

export default Home;
