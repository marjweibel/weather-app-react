import './App.css';

import Temp from './components/Temp';

function App() {
  return (
    <div className="app-container">
      <Temp />
    </div>
  );
}

// function App() {
//   const [weather, setWeather] = useState('');
//   const url =
//     'https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=48.8566&lon=2.3522';

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setWeather([data]));
//   }, []);

//   return <>{console.log(weather)}</>;
// }
export default App;
