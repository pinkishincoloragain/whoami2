import { react, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "./Components/controls/modeSlice";
import Links from "./Components/Links";
import Landing from "./Views/Landing";
import Blog from "./Views/Blog";

function App() {
  // const [darkMode, setDarkMode] = useState(LocalTheme);
  const mode = useSelector((state) => state.mode.value);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                // darkMode={darkMode}
                // handleDarkMode={handleDarkMode}
                // setCookie={setCookie}
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
                // darkMode={darkMode}
                // handleDarkMode={handleDarkMode}
                width={window.innerWidth}
                height={window.innerHeight}
                style={{ transitionDuration: "0.1s" }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
