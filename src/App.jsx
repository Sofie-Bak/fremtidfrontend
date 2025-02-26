import { useRoutes } from "react-router"
import Home from "./pages/Home"
import CursorBlur from "./components/cursorBlur/CursorBlur"
import BlurryBackground from "./components/blurryBackground/BlurryBackground";

function App() {

  const routes = useRoutes([
    { path: "/", element: <Home/> },
  ])

  return (
    <>
        <BlurryBackground/>
      <div className="z-1 relative w-full h-screen">
        <CursorBlur />
        <h1 className="text-white text-4xl text-center">
          test
        </h1>
      <div>{routes}</div>
      </div>
    </>
  );
}

export default App
