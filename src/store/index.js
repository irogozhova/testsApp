import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import sagas from 'sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(sagas);

export default store;
