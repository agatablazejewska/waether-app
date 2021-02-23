import { createContext } from 'react';

type CityContextType = [string, Function];

const CityContext = createContext<CityContextType>(["", () => {}]);

export default CityContext;