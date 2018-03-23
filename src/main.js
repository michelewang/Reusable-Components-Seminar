import Expo from 'expo'
import React, { Component } from 'react'
import {View, Text} from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import configureStore from './redux/store'
const { store, persistor } = configureStore()

// Import Navigators
import RootNavigator from './navigations/RootNavigator'
class Main extends Component {
  render() {
    return (
      <Provider store={store}>
      	<PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    )
  }
}

Expo.registerRootComponent(Main)
