import { SET_API } from '@/store/actionTypes';
import { IAPI } from '@/types';

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
