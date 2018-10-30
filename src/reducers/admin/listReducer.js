import * as types from '../../actions/admin/actionsTypes';

const initialState = {
    loading: false,
    datos: {},
    detalle :{},
    error: null,
    inventory: 0
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
        case types.DELETION_SUCCESS:
            return{...state}
        case types.UPDATED_SUCCESS:
            return{...state, loading:false}
        case types.RETRIEVED_INVENTORY:
            return{...state, loading:false, inventory:action.inventory}
        default:
            return state
    }
}

export default listReducer;