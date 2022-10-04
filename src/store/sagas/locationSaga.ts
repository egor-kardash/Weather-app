import { call, put, takeEvery } from 'redux-saga/effects';

import { parseLocationData } from '@/helpers';
import { ILocation } from '@/interfaces';
import { LocationService } from '@/services';

import { loadLocationByCityName, setLocation } from '../actionCreators';
import {
  CURRENT_LOCATION_REQUESTED,
  LOCATION_REQUESTED_BY_CITY,
} from '../actionTypes';

function* fetchCurrentLocation() {
  const data: ILocation = yield call(LocationService.getCurrentLocation);
  yield put(setLocation(data));
}

function* fetchLocationByCityName({
  payload,
}: ReturnType<typeof loadLocationByCityName>) {
  const data: ILocation[] = yield call(
    LocationService.getLocationByCityName,
    payload,
  );
  const parsedData = parseLocationData(data[0]);

  yield put(setLocation(parsedData));
}

export function* watchFetchLocationByCityName() {
  yield takeEvery(LOCATION_REQUESTED_BY_CITY, fetchLocationByCityName);
}

export function* watchFetchCurrentLocation() {
  yield takeEvery(CURRENT_LOCATION_REQUESTED, fetchCurrentLocation);
}
