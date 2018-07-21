import React, { Component } from "react";
import { styles } from "./styles";
import { Scene } from "react-native-router-flux";
import { connect, Provider } from "react-redux";

import HomeContainer from "../../containers/home/homeContainer";
import SessionContainer from "../../containers/session/sessionContainer";
import SignupContainer from "../../containers/session/signupContainer";
import BeerContainer from '../../containers/beer/beerContainer';

import LogoutButton from '../logoutButton/logoutButton';

import { RouterRedux } from "../../containers/routes/routesContainer";
import { configureStore } from "../../store/store";

const store = configureStore();

export class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterRedux
          navigationBarStyle={styles.navBar}
          tintColor="#ffffff"
          titleStyle={styles.barButtonTextStyle}
          renderRightButton={<LogoutButton/>}
        >
          <Scene key="root">
            <Scene
              key="login"
              component={SessionContainer}
              title="Ripuariapp"
              initial={true}
            />
            <Scene key="signup" component={SignupContainer} title="Signup" />
            <Scene key="home" component={HomeContainer} title="Home" />
            <Scene key="beer" component={BeerContainer} title="Beer"/>
          </Scene>
        </RouterRedux>
      </Provider>
    );
  }
}