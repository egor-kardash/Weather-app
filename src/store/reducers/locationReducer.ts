import { regionNames } from '@/helpers';
import { ILocation } from '@/interfaces';

import { SET_LOCATION } from '../actionTypes';

const initialState: ILocation = {
  city: 'Los Angeles',
  country: 'United States',
  latitude: 34.0522,
  longitude: -118.2437,
};

export const locationReducer = (
  state = initialState,
  action: { type: string; payload: ILocation },
) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        city: action.payload.city,
        country: regionNames.of(action.payload.country),
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };

    default:
      return state;
  }
};
