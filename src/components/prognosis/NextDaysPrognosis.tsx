import '../../styles/nextDaysPrognosis.css';
import { useContext, useEffect } from 'react';
import DailyWeatherDataContext from '../../context/DailyWeatherDataContext';
import WeekDays from '../../models/enums/weekDays';
import Weather from '../../utils/enums/weatherEnum';
import WeekDayPrognosis from './WeekDayPrognosis';
import moment from 'moment';

const NextDaysPrognosis = () => {
    const [dailyWeatherData, setDailyWeatherData] = useContext(DailyWeatherDataContext);

    return (
        <div className="NextDaysPrognosis">
            {
               dailyWeatherData.map(elem => {
                    return (
                        <WeekDayPrognosis weekday={WeekDays[elem.weekDay]} temperature={elem.temperature} weatherIcon={Weather.Windy_Sunny}/>
                    )
                })
            }
        </div>
    )
}

export default NextDaysPrognosis;