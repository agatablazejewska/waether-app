import '../../styles/cityAndTemperature.css';
import Weather from '../../utils/enums/weatherEnum';
import WeatherIcon from './WeatherIcon';

const CityAndTemperature = ({ city, temperature }: {city: string, temperature: number}) => {
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