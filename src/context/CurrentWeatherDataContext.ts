import { createContext } from 'react';
import WeatherData from '../models/WeatherData';

type CurrentWeatherDataContextType = [WeatherData, Function];

const initialState = {
    temperature: null,
    description: '',
    humidity: null,
    wind: null,
    icon: ''
}

const CurrentWeatherDataContext = createContext<CurrentWeatherDataContextType>([initialState, () => {}])

export default CurrentWeatherDataContext;