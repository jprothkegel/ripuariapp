import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BeerScreen from './src/views/BeerScreen'
import Test from './src/views/LoginForm';
import AdminScreen from './src/views/AdminScreen';

import { createRootNavigator } from './src/router/Router';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAVYLFgbUmgWBi0rxqt6lwhxzX4SXEbMhY",
  authDomain: "ripuariapp-react.firebaseapp.com",
  databaseURL: "https://ripuariapp-react.firebaseio.com",
  projectId: "ripuariapp-react",
  storageBucket: "ripuariapp-react.appspot.com",
  messagingSenderId: "501791638413",
}
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    const Layout = createRootNavigator(signedIn);
    return <Layout/>
  }
}

