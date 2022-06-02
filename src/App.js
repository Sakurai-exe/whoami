import './App.css';
import Header from './Header/Header';
import GreetingS from "./Greetings/Greetings";
import GotoChat from './GotoChat/GotoChat'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <GreetingS />
        <GotoChat />
      </div>
    </div>
  );
}

export default App;
