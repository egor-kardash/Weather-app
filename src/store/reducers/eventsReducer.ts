import { LOAD_EVENTS, LOAD_EVENTS_ERROR } from '@/store/actionTypes';
import { GoogleEvent, IGoogleAPIResponse, IState } from '@/types';

const initialState: IState<GoogleEvent[]> = {
  data: [],
  isLoading: false,
  status: 0,
  statusText: '',
};

export const eventsReducer = (
  state = initialState,
  action: { type: string; payload: IGoogleAPIResponse },
) => {
  switch (action.type) {
    case LOAD_EVENTS:
      return {
        ...state,
        data: action.payload.result.items,
        isLoading: true,
        status: action.payload.status,
        statusText: action.payload.statusText,
      };
    case LOAD_EVENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        status: action.payload.status,
        statusText: action.payload.statusText,
      };
    default:
      return state;
  }
};
