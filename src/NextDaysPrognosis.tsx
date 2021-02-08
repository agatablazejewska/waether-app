import './nextDaysPrognosis.css';
import Weather from './utils/weatherEnum';
import WeekDayPrognosis from './WeekDayPrognosis';

const NextDaysPrognosis = () => {
    return (
        <div className="NextDaysPrognosis">
            <WeekDayPrognosis weekday="MON" temperature={21} weather={Weather.Cloudy}/>
            <WeekDayPrognosis weekday="TUE" temperature={28} weather={Weather.Sunny}/>
            <WeekDayPrognosis weekday="WED" temperature={24} weather={Weather.Snowing_Sunny}/>
            <WeekDayPrognosis weekday="THU" temperature={17} weather={Weather.Thunder}/>
            <WeekDayPrognosis weekday="FRI" temperature={23} weather={Weather.Windy_Sunny}/>
        </div>
    )
}

export default NextDaysPrognosis;