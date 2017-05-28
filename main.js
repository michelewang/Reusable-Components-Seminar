import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MainApp from './components/App'

class App extends React.Component {
  render() {
    return (
      <MainApp />
    );
  }
}

Expo.registerRootComponent(App);
