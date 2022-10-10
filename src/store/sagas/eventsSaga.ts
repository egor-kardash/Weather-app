import { call, put, takeEvery } from 'redux-saga/effects';

import { parseGoogleDataResponse } from '@/helpers';
import { EVENTS_REQUESTED } from '@/store/actionTypes';
import { IGoogleAPIResponse } from '@/types';
import { apiCalendar } from '@/utils';

import { loadEvents, loadEventsError } from '../actionCreators';

function* loadEventsCalendar() {
  try {
    const response: IGoogleAPIResponse = yield call(
      apiCalendar.listUpcomingEvents,
      3,
    );
    if (response.status === 200) {
      const parsedResponse: IGoogleAPIResponse =
        parseGoogleDataResponse(response);
      yield put(loadEvents(parsedResponse));
    } else {
      yield put(loadEventsError(response));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchloadEventsCalendar() {
  yield takeEvery(EVENTS_REQUESTED, loadEventsCalendar);
}
