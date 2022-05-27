import React from 'react';
import { BsSunrise, BsSunset } from 'react-icons/bs';
import { FaTripadvisor } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { GiPressureCooker, GiWhirlwind } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi';
import { useAppSelector } from '../../app/hooks';
import { getTimeFromDt } from '../../helper/converDt';
import { currentWeatherSelector } from '../../redux/slice/currentWeatherSlice';
type Props = {}

const TodayContent = (props: Props) => {

    const weatherCurrent = useAppSelector(currentWeatherSelector);

    return (
        <>
            <div className="tab-today__item col zoom-in">
                <div className="box">
                    <div className="box-content">
                        <div className="box-icon">
                            <FiSun />
                        </div>
                        <div className="box-value">
                            {weatherCurrent.current.uvi}
                        </div>
                        <div className="box-desc">
                            UV index
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-today__item col zoom-in">
                <div className="box ">
                    <div className="box-content">
                        <div className="box-icon">
                            <GiWhirlwind />
                        </div>
                        <div className="box-value">
                            {weatherCurrent.current.wind_speed} km/h
                        </div>
                        <div className="box-desc">
                            Wind Speed
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-today__item col zoom-in">
                <div className="box">
                    <div className="box-content">
                        <div className="box-icon">
                            <WiHumidity />
                        </div>
                        <div className="box-value">
                            {weatherCurrent.current.humidity}
                        </div>
                        <div className="box-desc">
                            Humidity
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-today__item col zoom-in">
                <div className="box">
                    <div className="box-content">
                        <div className="tab-today-sun">
                            <p>{getTimeFromDt(weatherCurrent.current.sunrise)}</p><div className='box-icon'><BsSunrise /></div>
                        </div>
                        <div className="tab-today-sun">
                            <p>{getTimeFromDt(weatherCurrent.current.sunset)}</p><div className='box-icon'><BsSunset /></div>
                        </div>
                        <div className="box-desc">
                            Sunrise & Sunset
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-today__item col zoom-in">
                <div className="box">
                    <div className="box-content">
                        <div className="box-icon">
                            <FaTripadvisor />
                        </div>
                        <div className="box-value">
                            {weatherCurrent.current.visibility / 1000} Km
                        </div>
                        <div className="box-desc">
                            Visibility
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-today__item  col zoom-in">
                <div className="box">
                    <div className="box-content">
                        <div className="box-icon">
                            <GiPressureCooker />
                        </div>
                        <div className="box-value">
                            {weatherCurrent.current.pressure}
                        </div>
                        <div className="box-desc">
                            Atmospheric Pressure
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodayContent