import { regionNames } from '@/helpers';
import { LOAD_LOCATION, LOAD_LOCATION_ERROR } from '@/store/actionTypes';
import { IAPIResponse, IState, Location } from '@/types';

const initialState: IState<Location> = {
  data: {
    city: 'Los Angeles',
    country: 'United States',
    latitude: 34.0522,
    longitude: -118.2437,
  },
  isLoading: false,
  status: 0,
  statusText: '',
};

export const locationReducer = (
  state = initialState,
  action: { type: string; payload: IAPIResponse<Location> },
) => {
  switch (action.type) {
    case LOAD_LOCATION:
      return {
        ...state,
        data: {
          ...state.data,
          city: action.payload.data?.city,
          country: regionNames.of(action.payload.data?.country as string),
          latitude: action.payload.data?.latitude,
          longitude: action.payload.data?.longitude,
        },
        isLoading: true,
        status: action.payload.status,
        statusText: action.payload.statusText,
      };
    case LOAD_LOCATION_ERROR:
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
