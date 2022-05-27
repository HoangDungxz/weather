import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { getDayFromDt } from '../../helper/converDt';
import { WeatherData } from '../../models/WeatherData';
import { pickedWeatherSelector } from '../../redux/slice/pickedWeatherSlice';

type Props = {
    data: WeatherData;
}

const WeekContentDayItem = (props: Props) => {
    const weatherPicked = useAppSelector(pickedWeatherSelector);
    const { data } = props;
    const dispatch = useDispatch();

    const handleClickPicked = () => {
        dispatch({
            type: 'SET_WEATHER_PICKED',
            payload: data
        })
    }

    return (
        <div className={`tab-week__item col zoom-in ${weatherPicked.dt === data.dt ? "tab-week__item--active" : ''}`}
            onClick={() => handleClickPicked()}
        >
            <div className="week">
                <div className="week-header">
                    <div className="week-header__day">{getDayFromDt(data.dt || 0).weekdays}</div>
                    <div className="week-header__date">{getDayFromDt(data.dt || 0).time}</div>
                </div>
                <div className="week-content">
                    <div className="week-content__img"><img src={`http://openweathermap.org/img/wn/${data?.weather?.[0].icon}@2x.png`} alt="icon" className="week-weather-img" /></div>
                    <div className="week-content__deg">{data.temp?.min}°C <br />
                        {data.temp?.max}°C</div>
                </div>
            </div>
        </div>
    )
}

export default WeekContentDayItem