import React from 'react';
import { View, Share, Alert } from 'react-native';
import { Container, Content, Text, Button, Right, Left, Card, CardItem, Body} from 'native-base';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator';
import { connect } from 'react-redux';
import { payBeer } from '../../actions/admin/actions';

const mapStateToProps = ({
    routes,
    listReducer: {loading, datos, error, detalle}
  }) => ({
    routes: routes,
    loading: loading,
    datos: datos,
    detalle: detalle,
    error: error
  })

  const mapDispatchToProps = ({
    pay: payBeer
  })

class AdminDetail extends React.Component{
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

    onShare (){
        const content = {
            message: 'Estimado '+this.convertEmailToName(this.props.detalle.user) + ' debes $' + this.props.detalle.deudaTotal + ' en cervezas.',
            title: 'Cerveza',
        }
        const option = { dialogTitle: 'Pagar Cervezas'}
        Share.share(content,option)
    }
    _showAlert = () => {
        Alert.alert(
          'Borrar Deuda',
          '¿Estás seguro?',
          [ 
            {text: 'No', onPress: () => console.log('Dijo No')},
            {text: 'Sí', onPress: () => this.props.pay(this.props.detalle.id, this.props.detalle.user)},
            
          ],
          { cancelable: false }
        )
      }

      
    render(){
        return(
            <Container>
                <Content padder>
                    <View style={styles2.marginBox} >
                    {this.props.loading ? (<LoadingIndicator color="#000" size="large" />):(<Text
                        style={styles2.text}
                    >{this.convertEmailToName(this.props.detalle.user)}</Text>)}
                    
                    </View>
                    <Card>
                        <CardItem header bordered>
                            <Text>Cervezas Pedidas</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                {this.props.loading ? (<LoadingIndicator color="#000" size="large" />):(<Text>{this.props.detalle.cantCervezas}</Text>)}
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header bordered>
                            <Text> Deuda Total</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                {this.props.loading ? (<LoadingIndicator color="#000" size="large" />):(<Text>${this.props.detalle.deudaTotal}</Text>)}
                            </Body>
                        </CardItem>
                    </Card>
                    <Button 
                        block
                        style={styles2.greenButton}
                        onPress={()=>this.onShare()}
                    >
                        <Text>Cobrar</Text>
                    </Button>
                    <Button
                        block
                        style={styles2.redButton}
                        onPress = {()=>this._showAlert()}
                    >
                        <Text>Borrar Deuda</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDetail);

const styles2 = {
    redButton: {
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#ff4c4c'
    },
    greenButton: {
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#88cc88'
    },
    text: {
        fontSize: 24,
    },
    marginBox: {
        alignItems: "center",
        margin: 20
    }
}