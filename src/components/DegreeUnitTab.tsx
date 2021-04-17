import React, { useContext } from 'react';
import CurrentWeatherDataContext from '../context/CurrentWeatherDataContext';
import DailyWeatherDataContext from '../context/DailyWeatherDataContext';
import DegreeUnitContext from '../context/DegreeUnitContext';
import '../styles/degreeUnitTab.css';
import DegreeUnit from '../utils/enums/degreeUnitEnum';
import degreeUnitEnum from '../utils/enums/degreeUnitEnum';

const DegreeUnitTab = ({unit} : {unit: degreeUnitEnum}) => {
    const [degreeUnit, setDegreeUnit] = useContext(DegreeUnitContext);
    const [currentWeatherData, setCurrentWeatherData] = useContext(CurrentWeatherDataContext);
    const [dailyWeatherData, setDailyWeatherData] = useContext(DailyWeatherDataContext);

    function updateCurrentWeatherData(convertFunc: Function) {
        const currentTemp = {
            temperature: convertFunc(currentWeatherData.temperature),
        };
        const currentWeatherDataUpdated = Object.assign(currentWeatherData, currentTemp);
        setCurrentWeatherData(currentWeatherDataUpdated);
    }

    function updateDailyWeatherData(convertFunc: Function) {
        const dailyTemp = dailyWeatherData.map(elem => {
                elem.temperature = convertFunc(elem.temperature);
                return elem;
            });
        setDailyWeatherData(dailyTemp);
    }

    const updateTemperature = (convertFunc: Function) => {
        updateCurrentWeatherData(convertFunc);
        updateDailyWeatherData(convertFunc);
    }

    const convertToFahrenheit = (temp: number) => {
        const converted = (temp * (9/5)) + 32;
        return converted.toFixed();
    }

    const convertToCelsius = (temp: number) => {
        const converted = (temp - 32) * (5/9);
        return converted.toFixed();
    }

    const changeDegreeUnits = () => {
        if(degreeUnit === unit) return;

        setDegreeUnit(unit);
        if(unit === DegreeUnit.Fahrenheit) {
            updateTemperature(convertToFahrenheit);
        }
        else {
            updateTemperature(convertToCelsius);
        }
    }

    return (
        <div className="DegreeUnitTab">
            <button className={"unit"} onClick={changeDegreeUnits}>{unit}</button>
        </div>
    )
}

export default DegreeUnitTab;