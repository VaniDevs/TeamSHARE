
import {
    FETCH_AGENCY_INFO
  } from '../actions/types';

export function agencyReducer(state = null, action) {
    switch (action.type) {
    case FETCH_AGENCY_INFO:
        return { ...state, info: action.payload }
    default:
      return state;
    }
}