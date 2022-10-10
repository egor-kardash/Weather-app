import { all } from 'redux-saga/effects';

import { watchloadEventsCalendar } from './eventsSaga';
import {
  watchFetchCurrentLocation,
  watchFetchLocationByCityName,
} from './locationSaga';
import { watchfetchWeatherForecast } from './weatherSaga';

export default function* rootSaga() {
  yield all([
    watchFetchCurrentLocation(),
    watchFetchLocationByCityName(),
    watchfetchWeatherForecast(),
    watchloadEventsCalendar(),
  ]);
}
