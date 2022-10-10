import { call, put, takeEvery } from 'redux-saga/effects';

import { parseLocationData } from '@/helpers';
import { LocationService } from '@/services';
import {
  loadLocation,
  loadLocationByCityName,
  loadLocationError,
} from '@/store/actionCreators';
import {
  CURRENT_LOCATION_REQUESTED,
  LOCATION_REQUESTED_BY_CITY,
} from '@/store/actionTypes';
import { GeoLocation, IAPIResponse, Location } from '@/types';

function* fetchCurrentLocation() {
  try {
    const response: IAPIResponse<Location> = yield call(
      LocationService.getCurrentLocation,
    );

    if (response.status === 200) {
      yield put(loadLocation(response));
    } else {
      yield put(loadLocationError(response));
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchLocationByCityName({
  payload,
}: ReturnType<typeof loadLocationByCityName>) {
  try {
    const response: IAPIResponse<GeoLocation[]> = yield call(
      LocationService.getLocationByCityName,
      payload,
    );
    if (response.status === 200) {
      const parsedResponse: IAPIResponse<Location> =
        parseLocationData(response);
      yield put(loadLocation(parsedResponse));
    } else {
      yield put(
        loadLocationError({
          status: response.status,
          statusText: response.statusText,
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchLocationByCityName() {
  yield takeEvery(LOCATION_REQUESTED_BY_CITY, fetchLocationByCityName);
}

export function* watchFetchCurrentLocation() {
  yield takeEvery(CURRENT_LOCATION_REQUESTED, fetchCurrentLocation);
}
