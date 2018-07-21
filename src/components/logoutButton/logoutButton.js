import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from '../../../node_modules/react-native-elements';
import { Actions } from 'react-native-router-flux'

import {connect} from 'react-redux'

import { logoutUser } from "../../actions/session/actions";

const mapStateToProps = ({ sessionReducer }) => ({
    logged: sessionReducer.logged
  });

  const mapDispatchToProps = {
    logout: logoutUser
  };



class LogoutButton extends React.Component {
    constructor(props){
        super(props)
    }
    logout = () => {
        this.props.logout();
        setTimeout(() => {
          Actions.reset("login");
        }, 300);
      };
    render () {
        return(
            this.props.logged ? (
            <View>
                <Button 
                    title='Logout'
                    onPress={this.logout}
                    backgroundColor="#d63535"
                />
            </View>): null
            
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LogoutButton);


