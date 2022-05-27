import { put, takeLatest } from 'redux-saga/effects';
import actions from '../../consts/actions';
import { setWeatherCurrentSlice } from '../slice/currentWeatherSlice';

interface Action {
	payload: any;
	type: string;
}

function* setWeatherCurrent(action: Action): any {
	try {
		yield put(setWeatherCurrentSlice(action.payload));
	} catch (error) {
		yield put({ type: 'setWeatherSlice', payload: error });
	}
}
export function* watchCurrentWeather() {
	yield takeLatest(actions.CHANGE_VALUE, setWeatherCurrent);
}
