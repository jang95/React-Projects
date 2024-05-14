import { configureStore } from '@reduxjs/toolkit';
import { currentDataReducer } from './slice/weatherDataSlice';

export const store = configureStore({
  reducer: {
    currentData: currentDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
