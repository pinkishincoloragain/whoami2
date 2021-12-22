import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TemporaryDrawer from "./Components/TemporaryDrawer";
import Landing from "./Views/Landing";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Landing
                  width={window.innerWidth}
                  height={window.innerHeight}
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
