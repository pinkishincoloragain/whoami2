import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing";
import Error from "./Views/Error";
import Anniversary from "./Views/Anniversary";
import Thankyou from "./Views/Thankyou";
import Login from "./Views/Login";

function App() {
  React.useEffect(() => {
    console.log("%cHi there, developer", "background: black; color: white; font-size: 20px;");
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/anniversary' element={<Anniversary />} />
        <Route path='/login' element={<Login />} />
        <Route path='/thankyou' element={<Thankyou />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
