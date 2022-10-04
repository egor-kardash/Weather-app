import { IWeather } from '@/interfaces';

import {
  LOCATION_REQUESTED_BY_CITY,
  SET_API,
  SET_LOCATION,
  SET_WEATHER,
} from '../actionTypes';

export const setWeather = (data: IWeather[]) => ({
  type: SET_WEATHER,
  payload: data,
});

export const setLocation = (location: any) => ({
  type: SET_LOCATION,
  payload: location,
});

export const loadLocationByCityName = (city: any) => ({
  type: LOCATION_REQUESTED_BY_CITY,
  payload: city,
});

export const setAPI = (api: string) => ({
  type: SET_API,
  payload: api,
});
