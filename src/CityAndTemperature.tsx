import './cityAndTemperature.css';
import Weather from './utils/weatherEnum';
import WeatherIcon from './WeatherIcon';

const CityAndTemperature = ({ city, temperature }: {city: string, temperature: number}) => {
    return (
        <div className="CityAndTemperature">
            <div className="cityName">
                <h1>{city}</h1>
            </div>

            <div className="weather">
                <WeatherIcon weather={Weather.Snowing} />
                <h2 className={"temperature"}>{temperature} °C</h2>
            </div>
        </div>
    )
}

export default CityAndTemperature;