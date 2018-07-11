import React from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import * as firebase from 'firebase';

export default class AuthLoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        firebase.auth().onAuthStateChanged(function(user){
            this.props.navigation.navigate(user ? 'App' : 'Auth');
        });
    }
    render(){
        return(
            <View>
                <ActivityIndicator />
                <StatusBar barStyle='default'/>
            </View>
        );
    }
        
}