import { react, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./Components/Links";
import Landing from "./Views/Landing";
import Blog from "./Views/Blog";

function App() {
  const LocalTheme = window.localStorage.getItem("theme") || "light";
  const [darkMode, setDarkMode] = useState(LocalTheme);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    window.localStorage.setItem("theme", !darkMode);
  };

  useEffect(() => {
    if (localStorage.darkMode !== undefined) {
      setDarkMode(localStorage.darkMode);
    } else {
      localStorage.darkMode = darkMode;
    }
  }, []);

  console.log(darkMode);

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Landing
                  darkMode={darkMode}
                  handleDarkMode={handleDarkMode}
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
                  darkMode={darkMode}
                  handleDarkMode={handleDarkMode}
                  width={window.innerWidth}
                  height={window.innerHeight}
                  style={{ transitionDuration: "0.1s" }}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
