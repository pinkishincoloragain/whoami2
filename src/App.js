import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Landing from "./Views/Landing";
import Blog from "./Views/Blog";
import Admin from "./Views/Admin";
import Error from "./Views/Error";
import Projects from "./Views/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import Introduction from "./Views/Introduction";

function App() {
  // const [darkMode, setDarkMode] = useState(LocalTheme);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const darkMode = useSelector((state) => state.mode.value);

  useEffect(() => {
    console.log(
      "%cHi there!",
      "background: black; color: white; font-size: 20px;"
    );
  }, []);

  return (
    <div className="App" style={{ width: "100vw" }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                width={window.innerWidth}
                height={window.innerHeight}
                style={{ transitionDuration: "0.1s" }}
              />
            }
          />
          <Route
            path="/blog"
            element={
              <Blog
                width={window.innerWidth}
                height={window.innerHeight}
                style={{ transitionDuration: "0.1s" }}
              />
            }
          />
          <Route
            path="/introduction"
            element={
              <Introduction
                width={window.innerWidth}
                height={window.innerHeight}
                style={{ transitionDuration: "0.1s" }}
              />
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
