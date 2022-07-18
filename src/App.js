import "./App.css";
import Header from "./Header/Header";
import Hello from "./Greetings/Hello";
import GotoChat from "./GreetingsR/GreetingsR";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import { Route, Routes, Navigate } from "react-router-dom";
<<<<<<< HEAD

=======
import MetaTags from "react-meta-tags";
>>>>>>> 27c4700 (adaptive for 1024 or ipad pro)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      <MetaTags>
        <title>Denis Kan</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </MetaTags>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/Hello" />} />
          <Route path="/Hello" element={[<Hello />, <GotoChat />]} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
>>>>>>> 27c4700 (adaptive for 1024 or ipad pro)
        </Routes>
      </div>
    </div>
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> 27c4700 (adaptive for 1024 or ipad pro)
