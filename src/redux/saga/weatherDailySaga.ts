import { put, takeLatest } from 'redux-saga/effects';
import actions from '../../consts/actions';
import { setDailyWeatherSlice } from '../slice/dailyWeatherSlice';

interface Action {
	payload: any;
	type: string;
}

function* setWeatherDaily(action: Action): any {
	try {
		yield put(setDailyWeatherSlice({ ...action.payload, loading: true }));
		yield put({
			type: actions.SET_WEATHER_PICKED,
			payload: action.payload[0],
		});
	} catch (error) {
		yield put({ type: 'setWeatherSlice', payload: error });
	}
}

export function* watchDailyWeather() {
	yield takeLatest(actions.CHANGE_VALUE, setWeatherDaily);
}
