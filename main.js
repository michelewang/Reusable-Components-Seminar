import Expo, { Constants } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Board from './components/Board';

class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>HSA Devello</Text>
        <Board name="Hi guys"/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 50
  },
});

Expo.registerRootComponent(App);
