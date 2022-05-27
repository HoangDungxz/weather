import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../../consts/actions';
import { WeatherRespone } from '../../models/WeatherRespone';
import WeatherApi from '../services/weather/WeatherApi';

interface weatherParam {
	lat: number;
	lon: number;
}
interface Action {
	type: string;
	weatherParam: weatherParam;
}
function* weatherSaga(action: Action): any {
	try {
		const requestAsy = yield call(WeatherApi.getWeather, {
			lat: action.weatherParam.lat,
			lon: action.weatherParam.lon,
		});
		const requestOneAsy = yield call(WeatherApi.getWeatherOneCall, {
			lat: action.weatherParam.lat,
			lon: action.weatherParam.lon,
		});

		const response: WeatherRespone = {
			current: requestOneAsy.data.current,
			daily: requestOneAsy.data.daily,
			hourly: requestOneAsy.data.hourly,
			sys: requestAsy.data,
		};
		yield put({ type: actions.CHANGE_VALUE, payload: response });
	} catch (error) {
		yield put({ type: 'getWeatherSlice', payload: error });
	}
}
export function* watchWeatherAsync() {
	yield takeLatest(actions.GET_WEATHER, weatherSaga);
}
