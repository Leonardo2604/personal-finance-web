import { combineReducers, createStore, compose } from 'redux';

import authReducer from './reducers/auth';
import appReducer from './reducers/app';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

/* eslint dot-notation: "off" */
const composeEnhancers = (window as { [key: string]: any })['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
