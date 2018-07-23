import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { LoadingIndicator } from "../loadingIndicator/loadingIndicator";

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {retrieveList} from '../../actions/admin/actions';

const mapStateToProps = ({
  routes,
  listReducer: {loading, datos, error}
}) => ({
  routes: routes,
  loading: loading,
  datos: datos,
  error: error
})

const mapDispatchToProps = {
  retrieve: retrieveList
}

class AdminList extends Component {
  componentDidMount() {
    this.props.retrieve()
  }
  render() {
    const { loading } = this.props
    const { datos } = this.props
    return (
      <Container>
        <Content>
          {loading ? (<LoadingIndicator color="#000" size="large" />):(<List dataArray={datos}
            renderRow={(dato) =>
              <ListItem
                onPress={()=>console.log('datos',this.props.datos)}
              >
                <Text>{dato.email}</Text>
              </ListItem>
            }>
          </List>)}
          
        </Content>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList)