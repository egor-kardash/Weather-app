import { LOAD_WEATHER, LOAD_WEATHER_ERROR } from '@/store/actionTypes';
import { IAPIResponse, IState, Weather } from '@/types';

const initialState: IState<Weather[]> = {
  data: [],
  isLoading: false,
  status: 0,
  statusText: '',
};

export const weatherReducer = (
  state = initialState,
  action: { type: string; payload: IAPIResponse<Weather[]> },
) => {
  switch (action.type) {
    case LOAD_WEATHER:
      return {
        ...state,
        data: action.payload.data,
        isLoading: true,
        status: action.payload.status,
        statusText: action.payload.statusText,
      };
    case LOAD_WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        status: action.payload.status,
        statusText: action.payload.statusText,
      };
    default:
      return state;
  }
};
