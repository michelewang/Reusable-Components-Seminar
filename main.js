import Expo from "expo"
import React from "react"
import { Provider } from "react-redux"
import { StyleSheet, Text, View, ScrollView } from "react-native"
import { StackNavigator } from 'react-navigation'
import { setCustomText } from 'react-native-global-props'

import MainApp from "./components/App"
import Button from "./components/Button"
import store from "./redux/store"

const customTextProps = { 
  style: { 
  	fontFamily: 'Futura'
  }
}
setCustomText(customTextProps);

// class ChatScreen extends React.Component {
// 	static navigationOptions = {
// 		title: "Chat Here",
// 	}
// 	render() {
// 		return (
// 			<View>
// 				<Text>Chatting.....</Text>
// 			</View>
// 		)
// 	}
// }

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    )
  }
}

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome to Devello!',
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Button 
					onClick={() => navigate('Root')}
					style="boards"
					textStyle="board"
					text='BOARDS'/>
			</View> 
		)
	}
}

const App = StackNavigator({
	Home: { screen: HomeScreen },
	Root: { screen: Root },
})



Expo.registerRootComponent(App)
