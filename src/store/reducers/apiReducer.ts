import { IAPI } from '@/interfaces';

import { SET_API } from '../actionTypes';

const initialState: IAPI = {
  currentAPI: 'OpenWeather',
};

export const apiReducer = (
  state = initialState,
  action: { type: string; payload: string },
) => {
  switch (action.type) {
    case SET_API:
      return {
        ...state,
        currentAPI: action.payload,
      };
    default:
      return state;
  }
};
