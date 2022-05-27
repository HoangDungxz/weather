import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
export const searchSlice = createSlice({
	name: 'searchSlice',
	initialState: {
		loading: false,
		showResult: false,
		citis: [],
	},
	reducers: {
		changeShowResult: (state, action) => {
			state.showResult = action.payload;
		},
		getCitis: (state, action) => {
			state.citis = action.payload;
		},
	},
});

export const searchReducer = searchSlice.reducer;

export const searchResultSelector = (state: RootState) => {
	return state.searchSidebar.showResult;
};
export const citisSelector = (state: RootState) => {
	return state.searchSidebar.citis;
};

export const { changeShowResult, getCitis } = searchSlice.actions;
export default searchSlice;
