import { createContext } from 'react';

type WeatherDataContextType = [any[], Function];

const WeatherDataContext = createContext<WeatherDataContextType>([[], () => {}])

export default WeatherDataContext;