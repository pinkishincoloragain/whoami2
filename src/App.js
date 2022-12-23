import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing";
import Error from "./Views/Error";
import Privacy from "./Views/Privacy";
import Anniversary from "./Views/Anniversary";
import Thankyou from "./Views/Thankyou";
import Login from "./Views/Login";
import MyPage from "./Views/MyPage";
import Share from "./Views/Share";
import useLogin from "./hooks/useLogin";

import styled from "styled-components";

const LandingWrapper = styled.div({
  position: "relative",
  width: "100%",
  backgroundImage: "linear-gradient(180deg, #000000, #223148)",
  minHeight: "100vh",
  color: "white",
  overflow: "scroll",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function App() {
  React.useEffect(() => {
    console.log("%cHi there, developer", "background: black; color: white; font-size: 20px;");
  }, []);

  useLogin();

  return (
    <LandingWrapper>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/anniversary/*' element={<Anniversary />} />
          <Route path='/login' element={<Login />} />
          <Route path='/thankyou' element={<Thankyou />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/share' element={<Share />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </LandingWrapper>
  );
}

export default App;
