import './styles/app.css';
import './styles/styles.css';
import { useState } from 'react';
import DegreeUnits from './components/DegreeUnits';
import Details from './components/Details';
import CityAndTemperature from './components/prognosis/CityAndTemperature';
import NextDaysPrognosis from './components/prognosis/NextDaysPrognosis';
import Search from './components/Search';
import CityContext from './context/CityContext';
import CurrentWeatherDataContext from './context/CurrentWeatherDataContext';
import DailyWeatherDataContext from './context/DailyWeatherDataContext';
import DegreeUnit from './utils/enums/degreeUnitEnum';
import DegreeUnitContext from './context/DegreeUnitContext';


const App = () => {
  const cityHook = useState("");
  const degreeUnitHook = useState(DegreeUnit.Celsius);
  const dailyWeatherDataHook = useState([]);
  const currentWeatherDataHook = useState({
        temperature: null,
        description: '',
        humidity: null,
        wind: null,
        iconId: 8
  });


  return (
      <CityContext.Provider value={cityHook}>
          <CurrentWeatherDataContext.Provider value={currentWeatherDataHook}>
              <DailyWeatherDataContext.Provider value={dailyWeatherDataHook}>
                  <DegreeUnitContext.Provider value={degreeUnitHook}>
                      <div>
                          <div className={"App"}>
                              <div className="container">
                                  <Search />
                                  <CityAndTemperature />
                                  <DegreeUnits mobile={true} />
                                  <Details />
                                  <NextDaysPrognosis />
                              </div>
                              <DegreeUnits mobile={false} />
                          </div>
                          <div className={"GitHub"}>
                              <a href={"https://github.com/agatablazejewska/weather-app"}>GitHub</a>
                          </div>
                      </div>
                  </DegreeUnitContext.Provider>
              </DailyWeatherDataContext.Provider>
          </CurrentWeatherDataContext.Provider>
      </CityContext.Provider>
  );
}

export default App;
