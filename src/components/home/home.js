import React, { Component } from "react";
import { View, Button, Image, Text, StyleSheet } from "react-native";
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
    console.log("TIPOOO: ",this.props.userType)
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
          
          {/* <Button onPress={Actions.search} title="Go to Search" />
          <Button onPress={Actions.todolist} title="Start To-Do List" /> */}
          {this.props.userType === '' ?
           (<View><Text style={title}>User: {this.convertEmailToName(email)}</Text><LoadingIndicator color="#000" size="large" /></View>): 
           this.props.userType === 'admin' ? 
           (<View><Text style={title}>User: {this.convertEmailToName(email)}</Text><Button onPress={Actions.list} title="Go to Admin" />
           <Button onPress={Actions.signup} title="Go to SignUp" /></View>):
           (<View><Text style={title}>User: {this.convertEmailToName(email)}</Text><Button onPress={Actions.beer} title="Go to Beer" /></View>)}
          
          {/* {this.props.userType === '' ? 
          (<LoadingIndicator color="#000" size="large" />): 
          this.props.userType === 'admin' ? 
          (<Button onPress={Actions.signup} title="Go to Signup" />):(<Button onPress={Actions.beer} title="Go to Beer" />)} */}

          {/* {this.props.userType === 'admin' ? (<Button onPress={Actions.list} title="Go to Admin" /><Button onPress={Actions.beer} title="Go to Beer" />)):(} */}
          
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
  }
})