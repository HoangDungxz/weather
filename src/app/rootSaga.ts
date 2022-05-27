import { all, takeLatest } from 'redux-saga/effects';
import { watchGetCitisSearch } from '../redux/saga/searchCitisSaga';
import { watchCurrentWeather } from '../redux/saga/weatherCurrentSaga';
import { watchDailyWeather } from '../redux/saga/weatherDailySaga';
import { watchPickedeather } from '../redux/saga/weatherPickedSaga';

import { watchWeatherAsync } from '../redux/saga/weatherSaga';

export default function* rootSaga() {
	yield all([
		test(),
		watchWeatherAsync(),
		watchCurrentWeather(),
		watchDailyWeather(),
		watchPickedeather(),
		watchGetCitisSearch(),
	]);
}

export function* test() {
	yield takeLatest('*', (action: any): any => {
		// console.log(action);
	});
}
