import { useContext } from 'react';
import CurrentWeatherDataContext from '../context/CurrentWeatherDataContext';
import DetailsTile from './DetailsTile';

import '../styles/details.css';

const Details = () => {
    const [currentWeatherData] = useContext(CurrentWeatherDataContext);
    const humidity = currentWeatherData.humidity ? `${currentWeatherData.humidity}%` : "";
    const wind = currentWeatherData.wind ? `${currentWeatherData.wind} km/h` : "";

    return (
        <div className="Details">
            <DetailsTile detail="Humidity" value={humidity} />
            <DetailsTile detail="Wind" value={wind} />
        </div>
    )
}

export default Details;