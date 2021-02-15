import Weather from '../../utils/enums/weatherEnum';
import WeatherIcon from './WeatherIcon';
import '../../styles/weekDayPrognosis.css';

const WeekDayPrognosis = ({weekday, temperature, weather}
: {weekday: string, temperature: number, weather: Weather}) => {
    return (
        <div className="WeekDayPrognosis">
            <h3 className={"day"}>{weekday}</h3>
            <WeatherIcon weather={weather}/>
            <h3 className={"temperature"}>{temperature} °C</h3>
        </div>
    )
}

export default WeekDayPrognosis;