import * as reducers from './reducers';
import { combineReducers, createStore } from 'redux';
export default createStore(combineReducers(reducers));
