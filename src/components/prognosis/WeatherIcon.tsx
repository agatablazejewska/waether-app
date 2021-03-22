import { useEffect, useState } from 'react';
import Weather from '../../utils/enums/weatherEnum';
import {ReactComponent as Sunny } from '../../images/Ellipse 1.svg';
import {ReactComponent as Cloudy } from '../../images/Group 2.svg';
import {ReactComponent as PartiallyCloudy } from '../../images/Group 3.svg';
import {ReactComponent as Raining_Sunny } from '../../images/Group 8.svg';
import {ReactComponent as Raining } from '../../images/Group 10.svg';
import {ReactComponent as Snowing } from '../../images/Group 12.svg';
import {ReactComponent as Snowing_Sunny } from '../../images/Group 14.svg';
import {ReactComponent as Thunder } from '../../images/Group 15.svg';
import {ReactComponent as Thunder_Sunny } from '../../images/Group 19.svg';
import {ReactComponent as Windy } from '../../images/Group 22.svg';
import {ReactComponent as Windy_Sunny } from '../../images/Group 23.svg';
import '../../styles/weatherIcon.css';

const components = {
    Sunny: Sunny,
    Cloudy: Cloudy,
    Partially_Cloudy: PartiallyCloudy,
    Raining: Raining,
    Raining_sunny: Raining_Sunny,
    Snowing: Snowing,
    Thunder: Thunder,
    Windy: Windy,
}

const WeatherIcon = ({iconId}: {iconId: number}) => {
    const MatchIcon = (): JSX.Element => {
        if(iconId >= 800 && iconId <= 801 ) {
            //@ts-ignore
            const Icon = components[Weather[iconId]];
            return <Icon />;
        }

        const iconFirstNum = Number(iconId.toString().charAt(0));

        // @ts-ignore
        const Icon = components[Weather[iconFirstNum]];
        return <Icon />;
    }


    return (
        <div className={"WeatherIcon"}>
           <MatchIcon />
        </div>
    )
}

export default WeatherIcon;