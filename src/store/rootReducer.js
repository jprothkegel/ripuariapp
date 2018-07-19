import { combineReducers } from "redux";

import routesReducer from "../reducers/routes/routesReducer";
import sessionReducer from "../reducers/session/sessionReducer";
import beerReducer from '../reducers/beer/beerReducer';

const appReducer = combineReducers({
  routesReducer,
  sessionReducer,
  beerReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'SESSION_LOGOUT'){
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
