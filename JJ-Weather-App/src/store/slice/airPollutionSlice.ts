import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AirPollutionResponse } from '../../types/responseTypes';

const initialState: AirPollutionResponse = {
  coord: {
    lon: 0,
    lat: 0,
  },
  list: [
    {
      main: {
        aqi: 0,
      },
      components: {
        co: 0,
        no: 0,
        no2: 0,
        o3: 0,
        so2: 0,
        pm2_5: 0,
        pm10: 0,
        nh3: 0,
      },
      dt: 0,
    },
  ],
};

export const airPollutionSlice = createSlice({
  name: 'airPollution',
  initialState,
  reducers: {
    setAirPollution: (state, action: PayloadAction<AirPollutionResponse>) => {
      return action.payload;
    },
  },
});

export const { setAirPollution } = airPollutionSlice.actions;

export const airPollutionReducer = airPollutionSlice.reducer;
