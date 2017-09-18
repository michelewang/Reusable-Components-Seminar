import { StackNavigator } from 'react-navigation'

// import screens
import { HomeScreen, PlannerScreen } from '../screens'

export default RootNavigator = StackNavigator({
  HomeScreen: { 
    screen: HomeScreen,
    navigationOptions: {
      title: 'Welcome to Devello!',
    }
  },
  PlannerScreen: { 
    screen: PlannerScreen,
    navigationOptions: {
      title: "BOARDS"
    }
  },
})