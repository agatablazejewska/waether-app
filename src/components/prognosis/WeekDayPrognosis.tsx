import { useContext } from 'react';
import DegreeUnitContext from '../../context/DegreeUnitContext';
import Weather from '../../utils/enums/weatherEnum';
import WeatherIcon from './WeatherIcon';
import '../../styles/weekDayPrognosis.css';

const WeekDayPrognosis = ({weekday, temperature, weatherIconId}
: {weekday: string, temperature: number, weatherIconId: number}) => {
    const [degreeUnit] = useContext(DegreeUnitContext);

    return (
        <div className="WeekDayPrognosis">
            <h3 className={"day"}>{weekday}</h3>
            <WeatherIcon iconId={weatherIconId}/>
            <h3 className={"temperature"}>{temperature} {degreeUnit}</h3>
        </div>
    )
}

export default WeekDayPrognosis;