import { configureStore } from '@reduxjs/toolkit';
import { currentDataReducer } from './slice/weatherDataSlice';
import { weatherForecastReducer } from './slice/weatherForecast';

export const store = configureStore({
  reducer: {
    currentData: currentDataReducer,
    weatherForecast: weatherForecastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
