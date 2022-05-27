import React from 'react';
import { FaTemperatureHigh } from 'react-icons/fa';
import { GiPressureCooker, GiSunPriest, GiWhirlwind } from 'react-icons/gi';
import { GoRequestChanges } from 'react-icons/go';
import { WiHumidity, WiSunrise, WiSunset } from 'react-icons/wi';
import { useAppSelector } from '../../app/hooks';
import { getDayFromDt, getTimeFromDt } from '../../helper/converDt';
import { pickedWeatherSelector } from '../../redux/slice/pickedWeatherSlice';
type Props = {
    // weatherPicked: WeatherData
}

const WeekContentDayPicked = (props: Props) => {
    const weatherPicked = useAppSelector(pickedWeatherSelector);

    return (
        <>
            {weatherPicked &&
                <div className="week-picked">
                    <div className="week-picked__header">
                        <p>{getDayFromDt(weatherPicked.dt || 0).weekdays}, {getDayFromDt(weatherPicked.dt || 0).time}</p>
                    </div>

                    {/* <!-- Start Week Down Content --> */}
                    <div className="row">
                        <div className="week-picked__content col">
                            <div className="week-picked__logo">
                                <FaTemperatureHigh />
                            </div >
                            <div className="week-picked__decs" >
                                <div className="week-picked__decs-title" >
                                    <p>Temp</p>
                                </div >
                                <div className="week-picked__decs-content" >
                                    <p>
                                        {weatherPicked?.temp?.min}°C - {weatherPicked?.temp?.max}°C
                                    </p>
                                </div >
                            </div >
                        </div >

                        <div className="week-picked__content col">
                            <div className="week-picked__logo">
                                <GiSunPriest />
                            </div >
                            <div className="week-picked__decs" >
                                <div className="week-picked__decs-title" >
                                    <p>UV rays</p>
                                </div >
                                <div className="week-picked__decs-content" >
                                    <p>
                                        {weatherPicked.uvi}
                                    </p>
                                </div >
                            </div >
                        </div >

                        <div className="week-picked__content col">
                            <div className="week-picked__logo">
                                <WiHumidity />
                            </div >
                            <div className="week-picked__decs" >
                                <div className="week-picked__decs-title" >
                                    <p>Humidity</p>
                                </div >
                                <div className="week-picked__decs-content" >
                                    <p>
                                        {weatherPicked.humidity}
                                    </p>
                                </div >
                            </div >
                        </div >

                        <div className="week-picked__content col">
                            <div className="week-picked__logo">
                                <GiWhirlwind />
                            </div >
                            <div className="week-picked__decs" >
                                <div className="week-picke  d__decs-title" >
                                    <p>Wind speed</p>
                                </div >
                                <div className="week-picked__decs-content" >
                                    <p>
                                        {weatherPicked.wind_speed} m/s
                                    </p>
                                </div >
                            </div >
                        </div >

                        <div className="week-picked__content col">
                            <div className="week-picked__logo">
                                <WiSunrise />
                            </div >
                            <div className="week-picked__decs" >
                                <div className="week-picked__decs-title" >
                                    <p>Sunrise</p>
                                </div >
                                <div className="week-picked__decs-content" >
                                    <p>
                                        {getTimeFromDt(weatherPicked.sunrise || 0)}
                                    </p>
                                </div >
                            </div >
                        </div >

                        <div className="week-picked__content col">
                            <div className="week-picked__logo">
                                <WiSunset />
                            </div >
                            <div className="week-picked__decs" >
                                <div className="week-picked__decs-title" >
                                    <p>Sunset</p>
                                </div >
                                <div className="week-picked__decs-content" >
                                    <p>
                                        {getTimeFromDt(weatherPicked.sunset || 0)}
                                    </p>
                                </div >
                            </div >
                        </div >

                        <div className="week-picked__content col">
                            <div className="week-picked__logo">
                                <GoRequestChanges />
                            </div >
                            <div className="week-picked__decs" >
                                <div className="week-picked__decs-title" >
                                    <p>Description</p>
                                </div >
                                <div className="week-picked__decs-content description" >
                                    <p>
                                        {weatherPicked.weather?.[0].description}
                                    </p>
                                </div >
                            </div >
                        </div >

                        <div className="week-picked__content col">
                            <div className="week-picked__logo">
                                <GiPressureCooker />
                            </div >
                            <div className="week-picked__decs" >
                                <div className="week-picked__decs-title" >
                                    <p>Pressure</p>
                                </div >
                                <div className="week-picked__decs-content" >
                                    <p>
                                        {weatherPicked.pressure}
                                    </p>
                                </div >
                            </div >
                        </div >

                        {/* <!-- End Week Down Content Box --> */}
                    </div>
                </div>}
        </>
    )
}

export default WeekContentDayPicked