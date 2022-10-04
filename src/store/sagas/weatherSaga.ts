import { call, fork, put, select, takeEvery } from 'redux-saga/effects';

import {
  parseOpenWeatherDataResponse,
  parseWeatherBitDataResponse,
} from '@/helpers';
import {
  IAPI,
  ILocation,
  IOpenWeatherAPIResponce,
  IWeather,
  IWeatherBitAPIResponce,
} from '@/interfaces';
import { WeatherService } from '@/services';

import { setWeather } from '../actionCreators';
import { FORECAST_REQUESTED, WEATHER_REQUESTED } from '../actionTypes';

function* fetchTodaysWeather() {
  const city: string = yield select((state) => state.location['city']);
  const response: IWeather[] = yield call(
    WeatherService.getTodaysWeather,
    city,
  );
  yield put(setWeather(response));
}

function* fetchOpenWeatherForecast() {
  const { latitude, longitude }: ILocation = yield select(
    (state) => state.location,
  );

  const response: IOpenWeatherAPIResponce = yield call(
    WeatherService.getOpenWeatherForecast,
    latitude,
    longitude,
  );

  const parsedResponse: IWeather[] = parseOpenWeatherDataResponse(
    response.list,
  );
  yield put(setWeather(parsedResponse));
}

function* fetchWeatherBitForecast() {
  const { latitude, longitude }: ILocation = yield select(
    (state) => state.location,
  );

  const response: IWeatherBitAPIResponce = yield call(
    WeatherService.getWeatherBitForecast,
    latitude,
    longitude,
  );

  const parsedResponse: IWeather[] = parseWeatherBitDataResponse(response.data);
  yield put(setWeather(parsedResponse));
}

function* fetchWeatherForecast() {
  const { currentAPI }: IAPI = yield select((state) => state.api);

  if (currentAPI === 'OpenWeather') {
    yield fork(fetchOpenWeatherForecast);
  } else {
    yield fork(fetchWeatherBitForecast);
  }
}

export function* watchfetchWeatherForecast() {
  yield takeEvery(FORECAST_REQUESTED, fetchWeatherForecast);
}

export function* watchFetchTodaysWeather() {
  yield takeEvery(WEATHER_REQUESTED, fetchTodaysWeather);
}
