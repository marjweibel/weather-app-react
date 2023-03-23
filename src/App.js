import './App.css';
import Temp from './components/Temp';
import Clock from './components/Clock';

function App() {
  return (
    <div className="app-container">
      <div className="clock">
        <Clock />
      </div>
      <Temp />
    </div>
  );
}

export default App;
