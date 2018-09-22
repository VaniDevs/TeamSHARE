import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from "redux-thunk"
import rootReducer from "./reducers/index"

const middleware = [thunk, ReduxPromise];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
));

export default store;