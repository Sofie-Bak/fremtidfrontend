import { useRoutes } from "react-router"
import Home from "./pages/Home"
import CursorBlur from "./components/cursorBlur/CursorBlur"
import ParallaxStars from "./components/parallaxStars/ParralaxStars";
import PageScroll from "./components/pageScroll/PageScroller";

function App() {
 
  const routes = useRoutes([
    { path: "/", element: <Home/> },
  ])

  return (
    <>
      <div>{routes}</div>
    <ParallaxStars/>
      <div className="z-1 relative w-full h-screen">
        <CursorBlur />
        <PageScroll/>
      </div>
    </>
  );
}

export default App
