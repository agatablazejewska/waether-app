import '../../styles/cityAndTemperature.css';
import axios, { AxiosResponse } from 'axios';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import CityContext from '../../context/CityContext';
import CurrentWeatherDataContext from '../../context/CurrentWeatherDataContext';
import DailyWeatherDataContext from '../../context/DailyWeatherDataContext';
import WeatherData from '../../models/WeatherData';
import DailyWeatherData from '../../models/DailyWeatherData';
import Weather from '../../utils/enums/weatherEnum';
import WeatherIcon from './WeatherIcon';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const CityAndTemperature = () => {
    const [city, setCity] = useContext(CityContext);
    const [currentWeatherData, setCurrentWeatherData] = useContext(CurrentWeatherDataContext);
    const [dailyWeatherData, setDailyWeatherData] = useContext(DailyWeatherDataContext);
    const [error, setError] = useState(false);

    useEffect(() => {
        getWeatherData();
    }, [city]);

    const updateData = (response: AxiosResponse<any>) => {
        const data = response.data;
        const currentWeatherData = data.current;
        const cityNameFirstLetterUpperCase =  city.charAt(0).toUpperCase() + city.slice(1);

        setError(false);
        setCity(cityNameFirstLetterUpperCase);
        setCurrentWeatherData({
            temperature: Math.round(currentWeatherData.temp),
            description: currentWeatherData.weather[0].description,
            humidity: currentWeatherData.humidity,
            wind: currentWeatherData.wind_speed,
            icon: `https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`
        });
        setNextDaysWeatherData(response);
    };

    const setNextDaysWeatherData = (response: AxiosResponse<any>) => {
        const data = response.data.daily;
        const nextFiveDaysWeather = data.slice(1,6);

        // @ts-ignore
        const dailyWeather: DailyWeatherData[] = nextFiveDaysWeather.map(elem => {
            return {
                weekDay: moment(elem.dt*1000).day(),
                temperature: Math.round(elem.temp.day),
                description: elem.weather[0].description,
                icon: `https://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`
            }
        });

        setDailyWeatherData(dailyWeather);
    }

    const handleError = () => {
        setCurrentWeatherData({
            temperature: null,
            description: '',
            humidity: null,
            wind: null,
            icon: ''
        });
        setError(true);
    };

    const getWeatherData = () => {
        const geolocationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=50f1a490adbef43ee081050e90ee5e12&limit=1`;

        axios
            .get(geolocationUrl)
            .then(response => {
                const data = response.data[0];
                return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&exclude=minutely,hourly,alerts&appid=50f1a490adbef43ee081050e90ee5e12&units=metric`);
            })
            .then(updateData)
            .catch(handleError);
    }


    if(currentWeatherData.temperature) {
        return (
            <div className="CityAndTemperature">
                <h1 className="cityName">{city}</h1>

                <div className="weather">
                    <WeatherIcon weather={Weather.Snowing} />
                    <h2 className={"temperature"}>{currentWeatherData.temperature} °C</h2>
                </div>
            </div>
        )
    } else if (!city) {
        return null;
    }  else if (error) {
        return (
            <div className="CityAndTemperature">
                <h2>An error occurred. Please check the provided city name</h2>
            </div>
        )
    } else {
        return (
            <div className="CityAndTemperature">
                <Loader type="Oval" color="#00BFFF" height={80} width={80}/>
            </div>
        )
    }
}

export default CityAndTemperature;