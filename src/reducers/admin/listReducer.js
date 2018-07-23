import * as types from '../../actions/admin/actionsTypes';

const initialState = {
    loading: false,
    datos: {},
    detalle :{},
    error: null
}

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.DATA_LOADING:
            return{...state, loading:true}
        case types.RETRIEVED_SUCCESS:
            return{...state, loading:false, datos: action.datos}
        case types.DETAIL_SUCCESS:
            return{...state, loading:false, detalle:action.datos}
        case types.PAYED_SUCCESS:
            return{...state, loading:false}
        default:
            return state
    }
}

export default listReducer;