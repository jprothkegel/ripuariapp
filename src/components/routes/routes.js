import React, { Component } from "react";
import { styles } from "./styles";
import { Scene } from "react-native-router-flux";
import { connect, Provider } from "react-redux";

import HomeContainer from "../../containers/home/homeContainer";
// import SearchContainer from "../../containers/search/searchContainer";
// import CounterContainer from "../../containers/counter/counterContainer";
import SessionContainer from "../../containers/session/sessionContainer";
import SignupContainer from "../../containers/session/signupContainer";
// import TodolistContainer from "../../containers/todolist/todolistContainer";
import BeerContainer from '../../containers/beer/beerContainer';

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
            <Scene key="beer" component={BeerContainer} title="Beer" />
            {/* <Scene key="search" component={SearchContainer} title="Search" /> */}
            {/* <Scene key="counter" component={CounterContainer} title="Counter" /> */}
            {/* <Scene
              key="todolist"
              component={TodolistContainer}
              title="To-Do List"
            /> */}
          </Scene>
        </RouterRedux>
      </Provider>
    );
  }
}