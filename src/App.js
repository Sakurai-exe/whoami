import './App.css';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe'
import GotoChat from './GotoChat/GotoChat'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AboutMe />
        <GotoChat />
      </div>
    </div>
  );
}

export default App;
