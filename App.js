import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import store from './src/store/Store';

import HomeScreen from './src/HomeScreen';
import NoticeScreen from './src/NoticeScreen'
import Noticefull from './src/NoticeFull'
import Profile from './src/Profile'



const navigator = createStackNavigator(
  {
    Home: NoticeScreen,
    //Home: HomeScreen,
    //Home: NoticeScreen,
   Home: Noticefull,
   //Home: Profile,

    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
      borderColor:'#F8CE3B',
    }
  }
);

const Sam = createAppContainer(navigator)


class App extends Component {

  render() {
      return (
          <Provider store={store}>
              < Sam />
          </Provider>
      );
  }
}

export default App

//export default App

