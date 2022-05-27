import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { current } from '../../models/initRespone';
export const currentWeatherSlice = createSlice({
	name: 'currentWeatherSlice',
	initialState: {
		loading: false,
		response: current,
	},
	reducers: {
		setWeatherCurrentSlice: (state, action) => {
			const { current, sys } = action.payload;
			state.response = { current, sys };
		},
	},
});

export const currentWeatherReducer = currentWeatherSlice.reducer;

export const currentWeatherSelector = (state: RootState) => {
	return state.currentWeatherSidebar.response;
};
export const { setWeatherCurrentSlice } = currentWeatherSlice.actions;
export default currentWeatherSlice;
