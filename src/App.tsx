import "./app.css";
import './styles.css';
import CityAndTemperature from './CityAndTemperature';
import Details from './Details';
import NextDaysPrognosis from './NextDaysPrognosis';
import Search from './Search';

const App = () => {
  return (
      <div className={"App"}>
          <div className="container">
              <Search />
              <CityAndTemperature city="London" temperature={23}/>
              <Details />
              <NextDaysPrognosis />
          </div>
      </div>
  );
}

export default App;
