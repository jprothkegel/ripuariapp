import React, { Component } from "react";
import { View, Alert, Image, Button } from "react-native";
import { BasicFormComponent } from "../BasicForm/basicForm";
import { LoadingIndicator } from "../../loadingIndicator/loadingIndicator";
import { styles } from "../BasicForm/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Actions } from "react-native-router-flux";

const FIREBASE_LOGO = require("../../../../assets/icons/ripuaria.png");

export class LoginFormComponent extends React.Component {
  componentDidMount() {
    this.props.restore();
  }
  componentDidUpdate(prevProps) {
    const { error, logged } = this.props;

    if (!prevProps.error && error) Alert.alert("error", error);

    if (logged) Actions.reset("home");
  }

  render() {
    const { login, loading } = this.props;
    const { scrollView, imageBox, image, loginBox } = styles;
    return (
      <KeyboardAwareScrollView style={scrollView}>
        <View style={imageBox}>
          <Image style={image} source={FIREBASE_LOGO} />
        </View>
        <View style={loginBox}>
          {loading ? (
            <LoadingIndicator color="#ffffff" size="large" />
          ) : (
            <BasicFormComponent buttonTitle={"Login"} onButtonPress={login} />
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}