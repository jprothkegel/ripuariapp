import React from 'react';
import { Container, Header, Content, Card, CardItem, Input, Label, Button, Text, Right, Title, Body, Icon } from 'native-base';
import SignOutUser from '../auth/AuthLogic'

export default class BeerScreen extends React.Component{
    cantCervezas = 0
    deudaTotal = 0
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
            this.state.fontLoaded ?(
            <Container>
                <Header style={styles.colorFondo} >
                    <Body>
                        <Title style={styles.titulo} >Ripuariapp</Title>
                    </Body>
                    <Right>
                    <Button transparent>
                        <Icon Icon type="FontAwesome" name="home" />
                        onPress = {() => SignOutUser()}
                    </Button>
                </Right>
                </Header>

                <Button block style={styles.button} >
                    <Icon name='beer'/>
                    <Text>Pedir Cerveza</Text>
                </Button>

                <Content padder>
                    <Card>
                        <CardItem header bordered>
                        <Text>Cervezas Pedidas</Text>
                        </CardItem>
                        <CardItem bordered>
                        <Body>
                            <Text>
                            {this.cantCervezas}
                            </Text>
                        </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header bordered>
                        <Text>Deuda Total</Text>
                        </CardItem>
                        <CardItem bordered>
                        <Body>
                            <Text>
                            $0
                            </Text>
                        </Body>
                        </CardItem>
                    </Card>
                </Content>
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
        //marginTop: 10,
        color: '#fff'
    },
    colorFondo: {
        backgroundColor: '#ff4c4c',
        height: 85
    }
}