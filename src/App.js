import "./App.css";
import Header from "./Header/Header";
import Hello from "./Greetings/Hello";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import { Route, Routes, Navigate } from "react-router-dom";
import MetaTags from "react-meta-tags";
import GreetingsR from "./GreetingsR/GreetingsR";

function App() {
  return (
    <div className="App">
      <MetaTags>
        <title>Denis Kan</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </MetaTags>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/Hello" />} />
          {/* <Route path="/" element={[<Hello />, <GreetingsR />]} /> */}
          <Route path="/Hello" element={[<Hello />, <GreetingsR />]} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
