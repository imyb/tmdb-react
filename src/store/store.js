import { configureStore } from '@reduxjs/toolkit';
import movieNameSlice from './movie/movieNameSlice';
import movieTitleSlice from './movie/movieTitleSlice';

export default configureStore({
  reducer: {
    movieTitle: movieTitleSlice,
    movieName: movieNameSlice,
  },
});
