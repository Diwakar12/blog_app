import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import actionWatcher from "./actionWatcher";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import userReducer from "./reducers/userReducer";

const appReducer = combineReducers({ 
  userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([actionWatcher()]);
}
export const configureStore = () => {
  let store = createStore(appReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));

  store.runSaga = sagaMiddleware.run(rootSaga); 

  return { store };
};
