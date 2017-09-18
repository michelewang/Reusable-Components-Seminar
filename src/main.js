import Expo from "expo"
import React, { Component } from "react"
import {View, Text} from 'react-native'
import { Provider } from "react-redux"
import store from './redux/store'

// Import Navigators
import RootNavigator from './navigations/RootNavigator'
/*<View> 
        	<Text>
        	
        	</Text>
        </View>
        */
class Root extends Component {
  render() {
  	console.log("im here", store)
    return (
      <Provider store={store}>
      	<RootNavigator />
      </Provider>
    )
  }
}

Expo.registerRootComponent(Root)
