
import {
    REGISTER_FIREBASE_USER,
    LOGIN_FIREBASE_USER,
    FETCH_FIREBASE_USER,
    LOGOUT_FIREBASE_USER,
    FETCH_USER_INFO
  } from '../actions/types';

export function authReducer(state = null, action) {
    switch (action.type) {
    case FETCH_FIREBASE_USER:
    case LOGIN_FIREBASE_USER:
      return action.payload;
    case LOGOUT_FIREBASE_USER:
      return action.payload;
    case REGISTER_FIREBASE_USER:
      return action.payload;
    default:
      return state;
    }
}

export function userInfoReducer(state = {}, action) {
    switch (action.type) {
      case FETCH_USER_INFO:
        return action.payload;
      case LOGOUT_FIREBASE_USER:
        return {};
      default:
        return state;
    }
}
