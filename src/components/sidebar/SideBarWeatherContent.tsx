import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { useAppSelector } from '../../app/hooks';
import { getDayFromDt } from '../../helper/converDt';
import windySpeedLevel from '../../helper/windySpeedLevel';
import { currentWeatherSelector } from '../../redux/slice/currentWeatherSlice';


type Props = {}


const SideBarWeatherContent = (props: Props) => {

    const weatherCurrent = useAppSelector(currentWeatherSelector);

    return (
        <>
            <div className="sidebar-weather_content">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h2 className="date-dayname">{getDayFromDt(weatherCurrent.current.dt || 0).weekdays}</h2>
                        <span className="date-day">{getDayFromDt(weatherCurrent.current.dt || 0).time}</span>
                        <HiLocationMarker />
                        <span className="location">{weatherCurrent.sys.name}, {weatherCurrent.sys.sys.country}</span>
                    </div>
                    <div className="weather-container"><img src="http://openweathermap.org/img/wn/04n@2x.png" alt="icon" className="weather-img" />
                        <h1 className="weather-temp">{weatherCurrent.current.temp}°C</h1>
                        <h3 className="weather-desc">{weatherCurrent.sys.weather[0].description}, {windySpeedLevel(weatherCurrent.current.wind_speed)}</h3>
                    </div>
                </div>
            </div>
            <div className="sidebar-weather_footer"></div>
        </>
    )
}

export default SideBarWeatherContent