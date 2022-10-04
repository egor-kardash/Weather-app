import { IWeather, IWeatherState } from '@/interfaces';

import { SET_WEATHER } from '../actionTypes';

const initialState: IWeatherState = {
  data: [],
  isLoading: false,
};

export const weatherReducer = (
  state = initialState,
  action: { type: string; payload: IWeather[] },
) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        data: action.payload,
        isLoading: true,
      };
    default:
      return state;
  }
};
