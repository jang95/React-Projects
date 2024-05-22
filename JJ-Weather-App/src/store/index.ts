import { configureStore } from '@reduxjs/toolkit';
import { currentDataReducer } from './slice/weatherDataSlice';
import { weatherForecastReducer } from './slice/weatherForecast';
import { airPollutionReducer } from './slice/airPollutionSlice';

export const store = configureStore({
  reducer: {
    currentData: currentDataReducer,
    weatherForecast: weatherForecastReducer,
    airPollution: airPollutionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
