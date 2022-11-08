import { reducer as AuthReducer } from './Auth/reducer';
import { reducer as AppReducer } from './App/reducer';
import thunk from 'redux-thunk';
const { legacy_createStore, combineReducers, applyMiddleware } = require("redux");


const Reducers = combineReducers({ AuthReducer, AppReducer });
const store = legacy_createStore(Reducers, applyMiddleware(thunk));

export { store };