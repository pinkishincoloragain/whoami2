import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing";
import Blog from "./Views/Blog";
import Admin from "./Views/Admin";
import Error from "./Views/Error";
import Projects from "./Views/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import Introduction from "./Views/Introduction";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  useEffect(() => {
    console.log(
      "%cHi there, developer",
      "background: black; color: white; font-size: 20px;"
    );
  });
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
