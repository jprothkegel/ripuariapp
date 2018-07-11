import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Right, Title, Body } from 'native-base';
import {signUpUser, loginUser} from '../auth/AuthLogic';
export default class FloatingLabelExample extends Component {
    constructor(props){
        super(props)
        this.state = ({
            email: '',
            password: '',
            username: ''
        })
    }
    state = {
        fontLoaded: false
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({fontLoaded: true});
      }
  render() {
    return (
        this.state.fontLoaded ? (
        <Container>
            <Header style={styles.colorFondo} >
                <Body>
                    <Title style={styles.titulo} >Ripuariapp</Title>
                </Body>
            </Header>
            <Content>
            <Form>
                <Item floatingLabel>
                <Label>Username</Label>
                <Input 
                    autoCapitalize='none'
                    onChangeText = {(username)=>this.setState({username})}
                    autoCorrect={false}
                />
                </Item>
                <Item floatingLabel>
                <Label>Email</Label>
                <Input 
                    autoCapitalize='none'
                    onChangeText = {(email)=>this.setState({email})}
                    onSubmitEditing = {() => {this._TextInput._root.setNativeProps({text: ""});}}
                    keyboardType='email-address'
                    autoCorrect={false}
                />
                </Item>
                <Item floatingLabel last>
                <Label>Password</Label>
                <Input 
                    onChangeText = {(password)=>this.setState({password})}
                    secureTextEntry={true}
                    autoCapitalize='none'
                />
                </Item>
            </Form>
            <Button block style={styles.button} 
                onPress = {() => loginUser(this.state.email, this.state.password)}
            >
                <Text>Sign In</Text>
            </Button>
            <Button block style={styles.button} 
                onPress = {() => signUpUser(this.state.email, this.state.password, this.state.username)}
            >
                <Text>Sign Up</Text>
            </Button>
            
            </Content>
        </Container>
        ): null
    );
  }
}



const styles = {
    button: {
        marginTop: 30,
        marginRight: 15,
        marginLeft: 15,
        backgroundColor: '#ff4c4c'
    },
    titulo: {
        marginTop: 10,
        color: '#ffffff'
    },
    colorFondo: {
        backgroundColor: '#ff4c4c'
    }
}