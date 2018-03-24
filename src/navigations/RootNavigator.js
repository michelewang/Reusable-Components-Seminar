import { StackNavigator } from 'react-navigation'

// import screens
import { MainScreen } from '../screens'

export default RootNavigator = StackNavigator({
  MainScreen: { 
    screen: MainScreen,
    navigationOptions: {
      header: null,
    }
  },
})