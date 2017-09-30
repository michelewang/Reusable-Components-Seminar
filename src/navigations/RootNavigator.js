import { StackNavigator } from 'react-navigation'

// import screens
import { PlannerScreen } from '../screens'

export default RootNavigator = StackNavigator({
  PlannerScreen: { 
    screen: PlannerScreen,
    navigationOptions: {
      title: "BOARDS"
    }
  },
})