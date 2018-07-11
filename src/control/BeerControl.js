import * as firebase from 'firebase';

export function addBeer () {
    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref('beer/' + user.user.uid).set({
            
        })
    })
}