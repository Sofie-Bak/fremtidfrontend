import { useRoutes } from "react-router";
import Home from "./pages/Home";
import GlowNav from "./components/glowNav/GlowNav";
import AiRole from "./pages/AiRole";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/aiRole", element: <AiRole /> },
  ]);

  return (
    <>
      <GlowNav />
      <div>{routes}</div>
    </>
  );
}

export default App;
