import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { daily, WeatherData } from '../../models/initRespone';
export const pickedWeatherSlice = createSlice({
	name: 'pickedWeatherSlice',
	initialState: {
		loading: false,
		response: WeatherData,
	},
	reducers: {
		setPickedWeatherSlide: (state, action) => {
			state.response = action.payload;
		},
	},
});

export const pickedWeatherReducer = pickedWeatherSlice.reducer;

export const pickedWeatherSelector = (state: RootState) => {
	return state.pickedWeatherSidebar.response;
};

export const { setPickedWeatherSlide } = pickedWeatherSlice.actions;
export default pickedWeatherSlice;
