
import {
    FETCH_AGENCY_CLIENTS
  } from '../actions/types';

export function clientReducer(state = null, action) {
    switch (action.type) {
    case FETCH_AGENCY_CLIENTS:
        return { ...state, all: action.payload }
    default:
      return state;
    }
}