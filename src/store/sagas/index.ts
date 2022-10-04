import { all } from 'redux-saga/effects';

import {
  watchFetchCurrentLocation,
  watchFetchLocationByCityName,
} from './locationSaga';
import {
  watchFetchTodaysWeather,
  watchfetchWeatherForecast,
} from './weatherSaga';

export default function* rootSaga() {
  yield all([
    watchFetchTodaysWeather(),
    watchFetchCurrentLocation(),
    watchFetchLocationByCityName(),
    watchfetchWeatherForecast(),
  ]);
}
