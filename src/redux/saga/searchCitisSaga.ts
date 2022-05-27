import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../../consts/actions';
import CityApi from '../services/City/CityApi';
import { getCitis } from '../slice/searchSlice';

interface Action {
	payload: any;
	type: string;
}

function* setCitiesSearch(action: Action): any {
	try {
		const resultCity = yield call(CityApi.getCityByName, action.payload);
		yield put(getCitis(resultCity.data));
	} catch (error) {
		yield put({ type: 'setWeatherSlice', payload: error });
	}
}
export function* watchGetCitisSearch() {
	yield takeLatest(actions.GET_CITIS_SEARCH, setCitiesSearch);
}
