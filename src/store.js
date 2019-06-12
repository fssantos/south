import Immutable from 'immutable';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import mainSaga from './sagas';
import mainReducer from './ducks';

const sagaMiddleware = createSagaMiddleware();
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
    mainReducer,
    Immutable.fromJS({}),
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(mainSaga);
