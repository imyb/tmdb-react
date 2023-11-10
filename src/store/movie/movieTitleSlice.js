import { createSlice } from '@reduxjs/toolkit';

export const movieTitleSlice = createSlice({
  name: 'movieTitle',
  initialState: {
    title: '',
  },
  reducers: {
    setMovieTitle: (state, action) => {
      state.title = action.payload.title;
    },
    resetMovieTitle: (state) => {
      state.title = '';
    },
  },
});

export const { setMovieTitle, resetMovieTitle } = movieTitleSlice.actions;

export default movieTitleSlice.reducer;
