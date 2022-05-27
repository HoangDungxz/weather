import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../../consts/actions';
import CityApi from '../services/City/CityApi';

interface Action {
	payload: any;
	type: string;
}

function* setWeatherSearch(action: Action): any {
	try {
		const resultCity = yield call(CityApi.getCityByName, action.payload);
		yield put({ type: actions.GET_WEATHER, payload: resultCity });
	} catch (error) {
		yield put({ type: 'setWeatherSlice', payload: error });
	}
}
export function* watchSearchWeather() {
	yield takeLatest(actions.CHANGE_VALUE, setWeatherSearch);
}
