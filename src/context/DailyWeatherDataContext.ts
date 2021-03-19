import { createContext } from 'react';
import DailyWeatherData from '../models/DailyWeatherData';

type DailyWeatherDataContextType = [DailyWeatherData[], Function];

const DailyWeatherDataContext = createContext<DailyWeatherDataContextType>([[], () => {}])

export default DailyWeatherDataContext;