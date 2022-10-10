import {
  LOAD_EVENTS,
  LOAD_EVENTS_ERROR,
  LOAD_LOCATION,
  LOAD_LOCATION_ERROR,
  LOAD_WEATHER,
  LOAD_WEATHER_ERROR,
  LOCATION_REQUESTED_BY_CITY,
  SET_API,
} from '@/store/actionTypes';
import { IAPIResponse, IGoogleAPIResponse, Location, Weather } from '@/types';

export const loadWeather = (data: IAPIResponse<Weather[]>) => ({
  type: LOAD_WEATHER,
  payload: data,
});

export const loadWeatherError = (data: IAPIResponse<Weather[]>) => ({
  type: LOAD_WEATHER_ERROR,
  paylaod: data,
});

export const loadLocation = (location: IAPIResponse<Location>) => ({
  type: LOAD_LOCATION,
  payload: location,
});

export const loadLocationError = (location: IAPIResponse<Location>) => ({
  type: LOAD_LOCATION_ERROR,
  payload: location,
});

export const loadLocationByCityName = (city: string) => ({
  type: LOCATION_REQUESTED_BY_CITY,
  payload: city,
});

export const loadEvents = (events: IGoogleAPIResponse) => ({
  type: LOAD_EVENTS,
  payload: events,
});

export const loadEventsError = (events: IGoogleAPIResponse) => ({
  type: LOAD_EVENTS_ERROR,
  payload: events,
});

export const setAPI = (api: string) => ({
  type: SET_API,
  payload: api,
});
