import React from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Alert, Image } from "react-native";
import { LoadingIndicator } from "../loadingIndicator/loadingIndicator";
import { Container, Header, Content, Card, CardItem, Input, Label, Button, Text, Right, Title, Body, Icon } from 'native-base';
import styles from '../loadingIndicator/styles';



export class Beer extends React.Component{
    componentDidMount() {
        this.props.retrieve()
    }

    render (){
        const {add, loading} = this.props
        const {
            datos: {cantCervezas, deudaTotal}
        } = this.props
        return (
            <Container>
                {/* <Button 
                block 
                style = {styles2.button}
                onPress = {add}
                >
                    <Text>Pedir Cerveza</Text>
                </Button> */}

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
        // <KeyboardAwareScrollView>
        //     <Button 
        //         title = 'Add Beer'
        //         onPress = {add}
        //     />
        //     <Button 
        //         title = 'Actualizar'
        //         onPress = {retrieve}    
        //     />
        //     <Text>Cantidad de Cervezas</Text>
        //     {loading ? ( <LoadingIndicator color="#ffffff" size="large" />
        //     ):(<Text>{cantCervezas}</Text>)}

        //     <Text>Deuda Total</Text>
        //     {loading ? (<LoadingIndicator color="#ffffff" size="large" />
        //     ): (<Text>{deudaTotal}</Text>)}
        // </KeyboardAwareScrollView>
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

