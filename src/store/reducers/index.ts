import { combineReducers } from 'redux';

import { apiReducer } from './apiReducer';
import { eventsReducer } from './eventsReducer';
import { locationReducer } from './locationReducer';
import { weatherReducer } from './weatherReducer';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  api: apiReducer,
  events: eventsReducer,
});
