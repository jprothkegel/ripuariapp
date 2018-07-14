import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Right, Title, Body } from 'native-base';

export default class LogOut extends React.Component{
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
    render(){
        return(
            this.state.fontLoaded ? (
            <Container>
                <Header style={styles.colorFondo} >
                <Body>
                    <Title style={styles.titulo} >Ripuariapp</Title>
                </Body>
            </Header>

            <Button block style={styles.button} 
                
            >
                <Text>Sign Out</Text>
            </Button>
            </Container>):null
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