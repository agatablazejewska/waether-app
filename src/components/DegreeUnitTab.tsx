import '../styles/degreeUnitTab.css';
import degreeUnitEnum from '../utils/enums/degreeUnitEnum';

const DegreeUnitTab = ({unit} : {unit: degreeUnitEnum}) => {
    return (
        <div className="DegreeUnitTab">
            <button className={"unit"}>{unit}</button>
        </div>
    )
}

export default DegreeUnitTab;