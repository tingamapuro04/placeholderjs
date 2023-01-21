import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import photos from '../features/dataSlice';
import photo from '../features/photoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: photos,
    photo: photo,
  },
});
