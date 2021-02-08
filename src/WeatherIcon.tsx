import Weather from './utils/weatherEnum';
import {ReactComponent as Sunny } from './images/Ellipse 1.svg';
import {ReactComponent as Cloudy } from './images/Group 2.svg';
import {ReactComponent as PartiallyCloudy } from './images/Group 3.svg';
import {ReactComponent as Raining_Sunny } from './images/Group 8.svg';
import {ReactComponent as Raining } from './images/Group 10.svg';
import {ReactComponent as Snowing } from './images/Group 12.svg';
import {ReactComponent as Snowing_Sunny } from './images/Group 14.svg';
import {ReactComponent as Thunder } from './images/Group 15.svg';
import {ReactComponent as Thunder_Sunny } from './images/Group 19.svg';
import {ReactComponent as Windy } from './images/Group 22.svg';
import {ReactComponent as Windy_Sunny } from './images/Group 23.svg';
import './weatherIcon.css';

const components = {
    sunny: Sunny,
    cloudy: Cloudy,
    partially_cloudy: PartiallyCloudy,
    raining: Raining,
    raining_sunny: Raining_Sunny,
    snowing: Snowing,
    snowing_sunny: Snowing_Sunny,
    thunder: Thunder,
    thunder_sunny: Thunder_Sunny,
    windy: Windy,
    windy_sunny: Windy_Sunny
}

const WeatherIcon = ({weather}: {weather: Weather}) => {
    const Icon = components[weather];

    return (
        <div className={"WeatherIcon"}>
            <Icon />
        </div>
    )
}

export default WeatherIcon;