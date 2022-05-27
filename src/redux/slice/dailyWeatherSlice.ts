import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { daily } from '../../models/initRespone';
export const dailyWeatherSlice = createSlice({
	name: 'dailyWeatherSlice',
	initialState: {
		loading: false,
		response: daily,
	},
	reducers: {
		setDailyWeatherSlice: (state, action) => {
			const { daily, sys, loading } = action.payload;
			state.response = { daily, sys };
			state.loading = loading;
		},
	},
});

export const dailyWeatherReducer = dailyWeatherSlice.reducer;

export const dailyWeatherSelector = (state: RootState) => {
	return state.dailyWeatherSidebar.response;
};
export const dailyWeatherLoading = (state: RootState) => {
	return state.dailyWeatherSidebar.loading;
};
export const { setDailyWeatherSlice } = dailyWeatherSlice.actions;
export default dailyWeatherSlice;
