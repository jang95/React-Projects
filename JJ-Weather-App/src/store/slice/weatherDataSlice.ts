import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CurrentData } from '../../types/currentData';

const initialState: CurrentData = {
  name: '',
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  weather: {
    description: '',
    icon: '',
    id: 0,
    main: '',
  },
  wind: {
    deg: 0,
    gust: 0,
    speed: 0,
  },
  sys: {
    type: 0,
    id: 0,
    country: '',
    sunrise: 0,
    sunset: 0,
  },
  dt: 0,
  timezone: 0,
};

export const currentDataSlice = createSlice({
  name: 'currentData',
  initialState,
  reducers: {
    setCurrentData: (state, action: PayloadAction<CurrentData>) => {
      return action.payload;
    },
  },
});

export const { setCurrentData } = currentDataSlice.actions;

export const currentDataReducer = currentDataSlice.reducer;
