import React from 'react'
import { View, Alert, Image } from "react-native";
import { LoadingIndicator } from "../loadingIndicator/loadingIndicator";
import { Container, Header, Content, Card, CardItem, Input, Label, Button, Text, Right, Title, Body, Icon } from 'native-base';


export class BeerComponent extends React.Component{
    componentDidMount() {
        this.props.retrieve()
    }

    render (){
        const {loading} = this.props
        const {
            datos: {cantCervezas, deudaTotal}
        } = this.props
        return (
            <Container>
                <Button 
                block 
                style = {styles2.button}
                onPress = {this._showAlert}
                >
                    <Text>Pedir Cerveza</Text>
                </Button>



                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text>Cervezas Pedidas</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                {loading ? (<LoadingIndicator color="#000" size="large" />):
                                (<Text>{cantCervezas}</Text>)}
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text> Deuda Total</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                {loading ? (<LoadingIndicator color="#000" size="large" />):
                                (<Text>$ {deudaTotal}</Text>)}
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
    _showAlert = () => {
        Alert.alert(
          'Pedir Cerveza',
          '¿Estás seguro?',
          [
            {text: 'Sí', onPress: () => this.props.add()},
            {text: 'No', onPress: () => console.log('Dijo No')},
          ],
          { cancelable: false }
        )
      }
}

const styles2 = {
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

