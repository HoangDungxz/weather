import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { currentWeatherReducer } from '../redux/slice/currentWeatherSlice';
import { dailyWeatherReducer } from '../redux/slice/dailyWeatherSlice';
import { pickedWeatherReducer } from '../redux/slice/pickedWeatherSlice';
import { searchReducer } from '../redux/slice/searchSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		currentWeatherSidebar: currentWeatherReducer,
		dailyWeatherSidebar: dailyWeatherReducer,
		pickedWeatherSidebar: pickedWeatherReducer,
		searchSidebar: searchReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: false,
			serializableCheck: false,
			immutableCheck: false,
		}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
