import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { dailyWeatherLoading, dailyWeatherSelector } from '../../redux/slice/dailyWeatherSlice';
import WeekContentDayItem from './WeekContentDayItem';
import WeekContentDayPicked from './WeekContentDayPicked';


const WeekContent = () => {
	const weatherDaily = useAppSelector(dailyWeatherSelector);

	const loading = useAppSelector(dailyWeatherLoading);

	return (
		<>
			<div className='row tab-week'>
				{loading &&
					weatherDaily.daily.map((item) => {
						return <WeekContentDayItem data={item} key={item.dt} />;
					})}
			</div>

			<WeekContentDayPicked />
		</>
	);
};
export default WeekContent