import "./App.css";
import Header from "./Header/Header";
import Hello from "./Greetings/Hello";
import GotoChat from "./GreetingsR/GreetingsR";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/Greetings/Hello" />}
          />
          <Route path="/Greetings/Hello" element={[<Hello />, <GotoChat />]} />
          <Route path="/Header/NavBar/About/About" element={<About />} />
          <Route path="/Header/NavBar/Skills/Skills" element={<Skills />} />
          <Route path="/Header/NavBar/Contact/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

