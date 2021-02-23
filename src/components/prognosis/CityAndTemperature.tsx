import '../../styles/cityAndTemperature.css';
import { useContext } from 'react';
import CityContext from '../../context/CityContext';
import Weather from '../../utils/enums/weatherEnum';
import WeatherIcon from './WeatherIcon';

const CityAndTemperature = ({ temperature }: { temperature: number}) => {
    const [city] = useContext(CityContext);

    return (
        <div className="CityAndTemperature">
            <h1 className="cityName">{city}</h1>

            <div className="weather">
                <WeatherIcon weather={Weather.Snowing} />
                <h2 className={"temperature"}>{temperature} °C</h2>
            </div>
        </div>
    )
}

export default CityAndTemperature;