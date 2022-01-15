import {
  combineReducers, createStore, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import authReducer from './ducks/auth';
import appReducer from './ducks/app';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

const sagaMiddleware = createSagaMiddleware();

/* eslint dot-notation: "off" */
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga);

export default store;
