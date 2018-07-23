import firebaseService from '../../config/Firebase';
import * as types from './actionsTypes';

export const retrieveList = () => dispatch => {
    dispatch(dataLoading());
    let datos3;
    let datos=[];
    firebaseService.database().ref('users').once('value', function(snapshot){
        datos3 = snapshot.val();
    }).then(()=>{
        for (i in datos3){
            datos.unshift({
                id: datos3[i].uid,
                email: datos3[i].email,
                cantCervezas: datos3[i]['beers'].cantCervezas,
                deudaTotal: datos3[i]['beers'].deudaTotal
            })
        }
        console.log(datos)
        dispatch(retrievedSuccess(datos))
    })
}

const dataLoading = () => ({
    type: types.DATA_LOADING
})

const retrievedSuccess = datos => ({
    type: types.RETRIEVED_SUCCESS,
    datos
})