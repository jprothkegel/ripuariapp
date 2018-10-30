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
        dispatch(retrievedSuccess(datos))
    })
}

export const retrieveUser = (id, user, cantCervezas, deudaTotal) => dispatch => {
    dispatch(dataLoading());
    let datos;
    datos = {
        id: id,
        user: user,
        cantCervezas: cantCervezas,
        deudaTotal: deudaTotal
    }
    dispatch(detailSuccess(datos));
}

export const deleteUser = (id) => dispatch => {
    firebaseService.database().ref('users/'+id).remove().then(()=>{
        dispatch(deletionSuccess())
    })
}

export const payBeer = (id, user) => dispatch => {
    
    let datos;
    firebaseService.database().ref('/users/'+id+'/beers').set({
        cantCervezas: 0,
        deudaTotal: 0
    }).then(()=>{
        console.log('Succesfully set')
        dispatch(dataLoading());
        firebaseService.database().ref('users/'+id+'/beers/').once('value', function(snapshot){
            datos = {
                id: id,
                user: user,
                cantCervezas: snapshot.val().cantCervezas,
                deudaTotal: snapshot.val().deudaTotal
            }
        }).then(()=>{
            dispatch(payedSuccess());
            dispatch(detailSuccess(datos))
        })
    })
}

export const updateInventory = (inv) => dispatch => {
    firebaseService.database().ref('/data').set({
        inventory: inv
    }).then(()=>{
        dispatch(updatedSuccess())
    })
}

export const retrieveInventory = () => dispatch => {
    let inventory
    firebaseService.database().ref('/data').once('value', function(snapshot){
        inventory = snapshot.val().inventory
    }).then(()=>{
        dispatch(retrieveInventorySuccess(inventory))
    })
}

const dataLoading = () => ({
    type: types.DATA_LOADING
})

const retrievedSuccess = datos => ({
    type: types.RETRIEVED_SUCCESS,
    datos
})

const detailSuccess = datos => ({
    type: types.DETAIL_SUCCESS,
    datos
})

const payedSuccess = () => ({
    type: types.PAYED_SUCCESS,
})

const deletionSuccess = () => ({
    type: types.DELETION_SUCCESS,
})

const updatedSuccess = () => ({
    type: types.UPDATED_SUCCESS
})

const retrieveInventorySuccess = inventory => ({
    type: types.RETRIEVED_INVENTORY,
    inventory
})