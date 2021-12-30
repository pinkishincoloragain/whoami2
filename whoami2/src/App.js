import { react, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Landing from "./Views/Landing";
import Blog from "./Views/Blog";
import Admin from "./Views/Admin";
import Error from "./Views/Error";
import GerardWay from "./Views/Gerardway";

function App() {
  // const [darkMode, setDarkMode] = useState(LocalTheme);
  const mode = useSelector((state) => state.mode.value);

  useEffect(() => {
    console.log(
      "%cHi there!",
      "background: black; color: white; font-size: 20px;"
    );
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
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
            path="/gerardway"
            element={
              <GerardWay
                width={window.innerWidth}
                height={window.innerHeight}
                style={{ transitionDuration: "0.1s" }}
              />
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
