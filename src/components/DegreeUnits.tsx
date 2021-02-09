import DegreeUnitTab from './DegreeUnitTab';
import DegreeUnit from '../utils/degreeUnitEnum';

import '../styles/degreeUnits.css';

const DegreeUnits = ({mobile}: {mobile: boolean}) => {
    return(
        <div className={`degree-units_${mobile ? "small-screen" : "wider-screen"}`}>
            <DegreeUnitTab unit={DegreeUnit.Celsius} />
            <DegreeUnitTab unit={DegreeUnit.Fahrenheit} />
        </div>
    )
}

export default DegreeUnits;


