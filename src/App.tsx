import "./app.css";
import './styles.css';
import CityAndTemperature from './CityAndTemperature';
import Details from './Details';
import NextDaysPrognosis from './NextDaysPrognosis';
import Search from './Search';

const App = () => {
  return (
    <div className="App">
        <Search />
        <CityAndTemperature city="London" temperature={23}/>
        <Details />
        <NextDaysPrognosis />
    </div>
  );
}

export default App;
