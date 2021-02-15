import '../styles/app.css';
import '../styles/styles.css';
import DegreeUnits from './DegreeUnits';
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
              <DegreeUnits mobile={true} />
              <Details />
              <NextDaysPrognosis />
          </div>
          <DegreeUnits mobile={false} />
      </div>
  );
}

export default App;
