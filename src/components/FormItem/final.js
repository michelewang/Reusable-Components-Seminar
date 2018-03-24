import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { FormLabel, FormInput, Text, TextInput } from 'react-native-elements'
import styles from './styles'

export default class Initial extends Component {
  static propTypes = {
    key: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    containerStyle: View.propTypes.style,
    titleStyle: Text.propTypes.style,
    inputStyle: Text.propTypes.style, // WARNING: There is no TextInput.propTypes.style
    onChangeText: PropTypes.func,
  }

  render() {
    const {
      key,
      title,
      placeholder,
      containerStyle,
      titleStyle,
      labelStyle,
      inputStyle,
      onChangeText,
    } = this.props
    return (
      <View style={[styles.inputContainer, containerStyle]}>
        <FormLabel labelStyle={[styles.title, titleStyle]}>{title}</FormLabel>
        <FormInput
          containerStyle={styles.formInputContainer}
          inputStyle={[styles.formInput, inputStyle]}
          placeholder={placeholder}
          onChangeText={onChangeText && onChangeText.bind(key)}
        />
      </View>
    )
  }
}