import { applyMiddleware, compose, createStore } from 'redux';
import rootReducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initState) => {
  const store = createStore(
    rootReducers,
    initState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
