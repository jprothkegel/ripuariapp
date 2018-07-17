import firebaseService from '../../config/Firebase'
import * as types from './actionsTypes'


export const restoreSession = () => dispatch => {
    dispatch(sessionLoading());
    dispatch(sessionRestoring());
  
    firebaseService.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(sessionSuccess(user));
      } else {
        dispatch(sessionLogout());
      }
    });
  };
  
  export const loginUser = (email, password) => dispatch => {
    dispatch(sessionLoading());
  
    firebaseService
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(sessionSuccess(user));
      })
      .catch(error => {
        dispatch(sessionError(error.message));
      });
  };
  
  export const signupUser = (email, password) => dispatch => {
    dispatch(sessionLoading());

    firebaseService
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user)
        firebaseService.database().ref('users/' + user.user.uid).set({
          email: user.user.email,
          uid: user.user.uid,
          username: user.user.displayName
        })
        firebaseService.database().ref('users/' + user.user.uid + '/beers/').set({
          cantCervezas: 0,
          deudaTotal: 0
        })
        dispatch(signupSuccess(user));
      })
      .catch(error => {
        dispatch(sessionError(error.message));
      });
  };
  
  export const logoutUser = () => dispatch => {
    dispatch(sessionLoading());
  
    firebaseService
      .auth()
      .signOut()
      .then(() => {
        dispatch(sessionLogout());
      })
      .catch(error => {
        dispatch(sessionError(error.message));
      });
  };
  
  const sessionRestoring = () => ({
    type: types.SESSION_RESTORING
  });
  
  const sessionLoading = () => ({
    type: types.SESSION_LOADING
  });
  
  const sessionSuccess = user => ({
    type: types.SESSION_SUCCESS,
    user
  });
  
  const signupSuccess = user => ({
    type: types.SIGNUP_SUCCESS,
    user
  });
  
  const sessionError = error => ({
    type: types.SESSION_ERROR,
    error
  });
  
  const sessionLogout = () => ({
    type: types.SESSION_LOGOUT
  });