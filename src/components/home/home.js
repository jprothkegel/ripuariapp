import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from "./styles";
import { Actions } from "react-native-router-flux";
import { LoadingIndicator } from "../loadingIndicator/loadingIndicator";

export class Home extends React.Component {
  logout = () => {
    this.props.logout();
    setTimeout(() => {
      Actions.reset("login");
    }, 300);
  };

  componentDidMount(){
    this.props.getType()
  }

  convertEmailToName = (email) => {
    try {
      email = email.split('@')[0].split('.');
      nombre = email[0].charAt(0).toUpperCase() + email[0].slice(1)
      apellido = email[1].charAt(0).toUpperCase() + email[1].slice(1)
      username = nombre + ' ' + apellido
      return username
    }
    catch(error){
      return email
    }
  }

  render() {
    const { container, marginBox, title } = styles;
    const {
      user: { email }
    } = this.props;
    return (
      <View style={container}>
        <View style={marginBox}>
          <Image 
          style={styles2.imagen}
          source={require('../../../assets/icons/ripuaria.png')} />
        </View>

        <View>
          {this.props.userType === '' ?
           (<View>
             <Text style={title}>Usuario: {this.convertEmailToName(email)}</Text>
             <LoadingIndicator color="#000" size="large" />
            </View>): 
           this.props.userType === 'admin' ? 
           (<View>
            
              <Text style={title}>User: {this.convertEmailToName(email)}</Text>
            
              <Button block bordered info onPress={Actions.list}>
                <Text style={{color:'#60a6b2'}}>Administración</Text>
              </Button>
            
              <Button block bordered info onPress={Actions.signup}> 
                <Text style={{color:'#60a6b2'}}>Registro</Text>
              </Button>
              
              
            </View>):
           (<View><Text style={title}>User: {this.convertEmailToName(email)}</Text>
            <Button block bordered info onPress={Actions.beer}>
              <Text style={{color:'#60a6b2'}}>Pedir cerveza</Text>
            </Button>
           </View>)}
          
        </View>

        <View style={marginBox}>
          <Text>Ripuaria</Text>
        </View>
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  imagen: {
    width: 350,
    height: 350
  },
  redButton: {
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#ff4c4c'  
  }
})