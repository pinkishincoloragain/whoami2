import { react, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TemporaryDrawer from "./Components/TemporaryDrawer";
import Landing from "./Views/Landing";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cookies, setCookie] = useCookies(["mode"]);
  useEffect(() => {
    console.log(cookies.mode);
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
  }, [cookies]);

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
                    setDarkMode={setCookie}
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
