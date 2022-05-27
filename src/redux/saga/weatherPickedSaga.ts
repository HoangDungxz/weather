import { put, takeLatest } from 'redux-saga/effects';
import actions from '../../consts/actions';
import { setPickedWeatherSlide } from '../slice/pickedWeatherSlice';

interface Action {
	payload: any;
	type: string;
}

function* setWeatherPicked(action: Action): any {
	yield put(setPickedWeatherSlide({ ...action.payload, loading: true }));
}
export function* watchPickedeather() {
	yield takeLatest(actions.SET_WEATHER_PICKED, setWeatherPicked);
}
