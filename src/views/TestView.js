import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Button, Card } from 'react-native-elements';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
export default class FloatingLabelExample extends Component {
  handleSubmit(){
    console.log('Hola');
  }
  render() {
    return (
      <View style={styles.container} >
        <Button
          title="Pedir Cerveza"
          titleStyle={{ fontWeight: "700" }}
          icon={{
            name: 'local-bar',
            size: 15,
            color: 'white'
          }}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
        <Card title="Cervezas Pedidas">
          <Text>
          </Text>
            0
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 100,
    paddingLeft: 20,
  }
})