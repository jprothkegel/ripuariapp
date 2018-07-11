import * as firebase from 'firebase';

export function signUpUser(email, password, username){
    try{
        if (password.length < 6){
            alert('Please enter atleast 6 characters')
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user){
            firebase.database().ref('users/' + user.user.uid).set({
                email: user.user.email,
                uid: user.user.uid,
                username: username
            })
        });
        
    }
    catch(error){
        console.log(error.toString())
    }
}

export function loginUser (email, password, username){
    try {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user){
            console.log(user.user.uid)
        })
    }
    catch(error){
        console.log(error.toString())
    }
}


export function signOutUser (){
    try {
        firebase.auth().signOut()
        .then(function(){
            console.log('Signed Out')
        })
    }
    catch(error){
        console.log(error.toString())
    }
}