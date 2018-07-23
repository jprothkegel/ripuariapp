import * as types from '../../actions/admin/actionsTypes';

const initialState = {
    loading: false,
    datos: {},
    error: null
}

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.DATA_LOADING:
            return{...state, loading:true}
        case types.RETRIEVED_SUCCESS:
            return{...state, loading:false, datos: action.datos}
        default:
            return state
    }
}

export default listReducer;