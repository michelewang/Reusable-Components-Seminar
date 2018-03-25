import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { FormItem } from '../../components'
import styles from './styles'

export default class Final extends Component {
  static defaultProps ={
    buttonText: 'Submit',
  }

  static propTypes = {
    containerStyle: View.propTypes.style,
    buttonStyle: View.propTypes.style,
    buttonText: PropTypes.string,
    buttonTextStyle: Text.propTypes.style,
    onButtonPress: PropTypes.func,
  }

  state = {
  }

  submit = () => console.log('Submitted')

  render() {
    const {
      containerStyle,
      buttonStyle,
      buttonText,
      buttonTextStyle,
      onButtonPress,
      onChangeText,
    } = this.props
    return (
      <View style={[styles.formContainer, containerStyle]}>
        {this.props.children}
        <TouchableOpacity onPress={onButtonPress || this.submit} style={[styles.submit, buttonStyle]}>
          <Text style={[styles.submitText, buttonTextStyle]}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}