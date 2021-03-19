import Weather from '../../utils/enums/weatherEnum';
import WeatherIcon from './WeatherIcon';
import '../../styles/weekDayPrognosis.css';

const WeekDayPrognosis = ({weekday, temperature, weatherIcon}
: {weekday: string, temperature: number, weatherIcon: Weather}) => {
    return (
        <div className="WeekDayPrognosis">
            <h3 className={"day"}>{weekday}</h3>
            <WeatherIcon weather={weatherIcon}/>
            <h3 className={"temperature"}>{temperature} °C</h3>
        </div>
    )
}

export default WeekDayPrognosis;