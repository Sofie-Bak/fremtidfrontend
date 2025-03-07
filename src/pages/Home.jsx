import CursorBlur from "../components/cursorBlur/CursorBlur";
import Header from "../components/header/Header";
import PageScroller from "../components/pageScroll/PageScroller";
import ParallaxStars from "../components/parallaxStars/ParralaxStars";
import ToTopBtn from "../components/toTopBtn/ToTopBtn";

const Home = () => {
  return (
    <>
      <ParallaxStars />
      <PageScroller />
      <CursorBlur />
      <ToTopBtn />
    </>
  );
};

export default Home;
