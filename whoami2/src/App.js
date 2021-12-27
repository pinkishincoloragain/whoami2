import { react, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TemporaryDrawer from "./Components/Links";
import Landing from "./Views/Landing";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (localStorage.darkMode !== undefined) {
      setDarkMode(localStorage.darkMode);
    } else {
      localStorage.darkMode = darkMode;
    }
  }, []);
  // console.log(localStorage.darkMode);
  // console.log(darkMode);

  return (
    <div className="App">
      <div>
        <CookiesProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Landing
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    // setCookie={setCookie}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    style={{ transitionDuration: "1s" }}
                  />
                }
              />
              <Route
                path="/blog"
                element={
                  <Landing
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    style={{ transitionDuration: "1s" }}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </div>
  );
}

export default App;
