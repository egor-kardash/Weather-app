import { call, fork, put, select, takeEvery } from 'redux-saga/effects';

import {
  parseOpenWeatherDataResponse,
  parseWeatherBitDataResponse,
} from '@/helpers';
import { WeatherService } from '@/services';
import { loadWeather, loadWeatherError } from '@/store/actionCreators';
import { FORECAST_REQUESTED } from '@/store/actionTypes';
import {
  IAPI,
  IAPIResponse,
  Location,
  OpenWeather,
  Weather,
  WeatherBit,
} from '@/types';

function* fetchOpenWeatherForecast() {
  try {
    const { latitude, longitude }: Location = yield select(
      (state) => state.location.data,
    );

    const response: IAPIResponse<OpenWeather> = yield call(
      WeatherService.getOpenWeatherForecast,
      latitude,
      longitude,
    );

    if (response.status === 200) {
      const parsedResponse: IAPIResponse<Weather[]> =
        parseOpenWeatherDataResponse(response);
      yield put(loadWeather(parsedResponse));
    } else {
      yield put(
        loadWeatherError({
          status: response.status,
          statusText: response.statusText,
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchWeatherBitForecast() {
  try {
    const { latitude, longitude }: Location = yield select(
      (state) => state.location.data,
    );

    const response: IAPIResponse<WeatherBit> = yield call(
      WeatherService.getWeatherBitForecast,
      latitude,
      longitude,
    );

    if (response.status === 200) {
      const parsedResponse: IAPIResponse<Weather[]> =
        parseWeatherBitDataResponse(response);

      yield put(loadWeather(parsedResponse));
    } else {
      yield put(
        loadWeatherError({
          status: response.status,
          statusText: response.statusText,
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
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
