import WeekDays from './enums/weekDays';

type DailyWeatherData = {
    weekDay: WeekDays
    temperature: number,
    description: string,
    icon: string,
}

export default DailyWeatherData;