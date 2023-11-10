import { createSlice } from '@reduxjs/toolkit';

export const movieNameSlice = createSlice({
  name: 'movieName',
  initialState: {
    name: '',
  },
  reducers: {
    setMovieName: (state, action) => {
      state.name = action.payload.name;
    },
    resetMovieName: (state) => {
      state.name = '';
    },
  },
});

export const { setMovieName, resetMovieName } = movieNameSlice.actions;

export default movieNameSlice.reducer;
