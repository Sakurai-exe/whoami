import "./App.css";
import Header from "./Header/Header";
import Greetings from "./Greetings/Greetings";
import GotoChat from "./GotoChat/GotoChat";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to="/Greetings/Greetings" />}
            />
            <Route path="/Greetings/Greetings" element={<Greetings />} />
            <Route path="/Header/NavBar/About/About" element={<About />} />
            <Route path="/Header/NavBar/Skills/Skills" element={<Skills />} />
            <Route
              path="/Header/NavBar/Contact/Contact"
              element={<Contact />}
            />
          </Routes>
          <GotoChat />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

