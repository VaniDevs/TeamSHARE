
import {
    FETCH_AGENCY_CLIENTS,
    FETCH_ALL_CLIENTS
  } from '../actions/types';

export function clientReducer(state = null, action) {
    switch (action.type) {
    case FETCH_AGENCY_CLIENTS:
    case FETCH_ALL_CLIENTS: 
        return { ...state, all: action.payload }
    default:
      return state;
    }
}