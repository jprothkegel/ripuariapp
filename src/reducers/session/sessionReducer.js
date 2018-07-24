import * as types from "../../actions/session/actionsTypes";

const initialState = {
  restoring: false,
  loading: false,
  user: {},
  error: null,
  logged: null,
  registered: null,
  userType: ''
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SESSION_RESTORING:
      return { ...state, restoring: true };
    case types.SESSION_LOADING:
      return { ...state, restoring: false, loading: true, error: null };
    case types.SESSION_SUCCESS:
      return {
        ...state,
        restoring: false,
        loading: false,
        user: action.user,
        error: null,
        logged: true,
        registered: null
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        restoring: false,
        loading: false,
        error: null,
        logged: null,
        registered: true
      };
    case types.SESSION_ERROR:
      return {
        ...state,
        restoring: false,
        loading: false,
        user: null,
        error: action.error,
        logged: null,
        registered: null
      };
    case types.SESSION_LOGOUT:
      return initialState;
    case types.RETRIEVE_TYPE:
      return{...state, userType: action.userType, loading: false}
    default:
      return state;
  }
};

export default sessionReducer;