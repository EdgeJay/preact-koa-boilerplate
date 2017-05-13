import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'preact-router-redux';
import * as reducers from '../reducers';

export default createStore(combineReducers({
  ...reducers,
  routing: routerReducer,
}));
