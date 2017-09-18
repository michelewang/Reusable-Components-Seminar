import React, { Component } from 'react'
import {View} from 'react-native'
import {Button} from "../../components"

export default class HomeScreen extends Component {
  render() {
    console.log('got this far')
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button 
          onClick={() => navigate('PlannerScreen')}
          style="boards"
          textStyle="board"
          text='BOARDS'
        />
      </View> 
    )
  }
}