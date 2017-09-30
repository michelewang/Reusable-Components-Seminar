import Expo from "expo"
import React, { Component } from "react"
import {View, Text} from 'react-native'
import { Provider } from "react-redux"
import store from './redux/store'

// Import Navigators
import RootNavigator from './navigations/RootNavigator'
class Main extends Component {
  render() {
    return (
      <Provider store={store}>
      	<RootNavigator />
      </Provider>
    )
  }
}

Expo.registerRootComponent(Main)
