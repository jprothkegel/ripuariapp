import * as types from '../../actions/beer/actionTypes';

const initialState = {
    loading: false,
    datos: {},
    error: null
}

const beerReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.DATA_LOADING:
            return {...state, loading: true}
        case types.ADDED_SUCCESS:
            return {...state, loading: false, datos: action.datos}
        case types.BEER_ERROR:
            return {...state, error: action.error}
        case types.RETRIEVED_SUCCESS:
            return {...state, loading: false, datos: action.datos}
        case types.BEER_LOGOUT:
            return initialState
        default: 
            return state
    }
}
 export default beerReducer;