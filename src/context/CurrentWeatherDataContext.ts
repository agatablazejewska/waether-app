import { createContext } from 'react';
import WeatherData from '../models/WeatherData';

type CurrentWeatherDataContextType = [WeatherData, Function];

const initialState = {
    temperature: null,
    description: '',
    humidity: null,
    wind: null,
    iconId: 8
}

const CurrentWeatherDataContext = createContext<CurrentWeatherDataContextType>([initialState, () => {}])

export default CurrentWeatherDataContext;