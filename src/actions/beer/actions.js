import firebaseService from '../../config/Firebase';
import * as types from './actionTypes'

export const addBeer = () => dispatch => {
    dispatch(dataLoading());
    const beerValue = 1200
    let datos = {cantCervezas: 0, deudaTotal: 0}
    let user = firebaseService.auth().currentUser;
    let inventory
    if (user){
        firebaseService.database().ref('/data').once('value', function(snapshot){
            inventory = snapshot.val().inventory
        }).then(()=>{
            firebaseService.database().ref('/data').set({
                inventory: inventory - 1
            })
        })

        firebaseService.database().ref('users/'+user.uid+'/beers/').once('value', function(snapshot){
            datos.cantCervezas = snapshot.val().cantCervezas
            datos.deudaTotal = snapshot.val().deudaTotal
        }).then(()=>{
            datos.cantCervezas = datos.cantCervezas + 1
            datos.deudaTotal = datos.cantCervezas*beerValue

            firebaseService.database().ref('users/'+user.uid+'/beers/').set({
                cantCervezas: datos.cantCervezas,
                deudaTotal: datos.deudaTotal
            })
            dispatch(addedSuccess(datos))
        }).catch(error => {
            dispatch(beerError(error.message))
        })
    } else {
        dispatch(beerLogout())
    }
}

export const retrieveData = () => dispatch => {
    dispatch(dataLoading());
    let datos = {cantCervezas:0, deudaTotal:0}
    let user = firebaseService.auth().currentUser;
    if (user){
            firebaseService.database().ref('users/'+user.uid+'/beers/').once('value', function(snapshot){
                datos.cantCervezas = snapshot.val().cantCervezas
                datos.deudaTotal = snapshot.val().deudaTotal
            }).then(() => {
                dispatch(retrievedSuccess(datos))
            }).catch(error => {
                dispatch(beerError(error.message))
            })
    } else {
        dispatch(beerLogout())
    }
}

const dataLoading = () => ({
    type: types.DATA_LOADING
})

const addedSuccess = datos => ({
    type: types.ADDED_SUCCESS,
    datos
})

const retrievedSuccess = datos => ({
    type: types.RETRIEVED_SUCCESS,
    datos
})

const beerError = error => ({
    type: types.BEER_ERROR,
    error
})

const beerLogout = () => ({
    type: types.BEER_LOGOUT
})
