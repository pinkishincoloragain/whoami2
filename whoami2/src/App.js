import { react, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TemporaryDrawer from "./Components/TemporaryDrawer";
import Landing from "./Views/Landing";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cookies, setCookie] = useCookies(["mode"]);
  useEffect(() => {
    if (cookies.mode !== undefined) {
      setDarkMode(cookies.mode);
    } else {
      setCookie(
        "mode",
        { darkMode },
        {
          path: "/",
        }
      );
    }
    console.log(cookies.mode);
    console.log(darkMode);
  }, []);

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
                    width={window.innerWidth}
                    height={window.innerHeight}
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
