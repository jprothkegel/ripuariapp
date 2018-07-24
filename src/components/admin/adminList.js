import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Button, Right, Left } from 'native-base';
import { LoadingIndicator } from "../loadingIndicator/loadingIndicator";

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {retrieveList, retrieveUser, deleteUser} from '../../actions/admin/actions';

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

const mapDispatchToProps = {
  retrieve: retrieveList,
  retrieveUser: retrieveUser,
  deleteUser: deleteUser
}

class AdminList extends Component {
  componentDidMount(){
    this.props.retrieve()
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

  successDeleted(id){
    this.props.deleteUser(id);
    this.props.retrieve();
  }

  render() {
    const { loading } = this.props
    const { datos } = this.props
    return (
      <Container>
        <Content>
        <Button 
          onPress = {()=>this.props.retrieve()}
          block style={styles2.redButton} >
            <Text>Actualizar</Text>
          </Button>
          {loading ? (<LoadingIndicator color="#000" size="large" />):(<List dataArray={datos}
            renderRow={(dato) =>
              <ListItem
              onPress={()=>{Actions.detail(), this.props.retrieveUser(dato.id, dato.email, dato.cantCervezas, dato.deudaTotal)}}
              >
                <Left>
                <Text>{this.convertEmailToName(dato.email)}</Text>
                </Left>
                
                <Right>
                  <Text>${dato.deudaTotal}</Text>
                  <Button
                    style = {styles2.redButton}
                    onPress={()=>{this.successDeleted(dato.id)}}
                  >
                    <Text style={styles2.buttonText} >Eliminar Usuario</Text>
                  </Button>
                  
                </Right>
              </ListItem>
            }>
          </List>)}
        </Content>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList)
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
  buttonText: {
    fontSize: 8
  },
  marginBox: {
      alignItems: "center",
      margin: 20
  }
}