import { configureStore } from '@reduxjs/toolkit';
import carReducer from './constants/car/carSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
