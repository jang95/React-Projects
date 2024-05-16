import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setForecastType } from '../../types/storeTypes';
import { ForecastState } from '../state';

const initialState: setForecastType = ForecastState;

export const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState,
  reducers: {
    setWeatherForecast: (state, action: PayloadAction<setForecastType>) => {
      return action.payload;
    },
  },
});

export const { setWeatherForecast } = weatherForecastSlice.actions;

export const weatherForecastReducer = weatherForecastSlice.reducer;
