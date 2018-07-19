import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import rootReducer from "./rootReducer";

const configureStore = () => {
  const middleware = [thunk];
  middleware.push(logger);
  return createStore(rootReducer, applyMiddleware(...middleware));
};

export { configureStore };