import Expo from 'expo';
import React from 'react';
import {Provider} from 'react-redux'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MainApp from './components/App'
import store from './redux/store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
