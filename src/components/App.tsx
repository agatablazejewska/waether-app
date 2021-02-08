import '../styles/app.css';
import '../styles/styles.css';
import DegreeUnit from '../utils/degreeUnitEnum';
import DegreeUnitTab from './DegreeUnitTab';
import Details from './Details';
import CityAndTemperature from './prognosis/CityAndTemperature';
import NextDaysPrognosis from './prognosis/NextDaysPrognosis';
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
          <div className={"degreeUnits"}>
              <DegreeUnitTab unit={DegreeUnit.Celsius} />
              <DegreeUnitTab unit={DegreeUnit.Fahrenheit} />
          </div>
      </div>
  );
}

export default App;
