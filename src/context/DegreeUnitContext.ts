import { createContext } from 'react';
import DegreeUnit from '../utils/enums/degreeUnitEnum';

type DegreeUnitContextType = [DegreeUnit, Function];

const DegreeUnitContext = createContext<DegreeUnitContextType>([DegreeUnit.Celsius, () => {}]);

export default DegreeUnitContext;