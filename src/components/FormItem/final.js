import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { FormLabel, FormInput, Text } from 'react-native-elements'
import styles from './styles'

export default class Initial extends Component {
  static defaultProps = {
    title: '',
  }
  
  static propTypes = {
    title: PropTypes.string,
    containerStyle: View.propTypes.style,
    titleStyle: Text.propTypes.style,
    inputStyle: Text.propTypes.style, // WARNING: There is no TextInput.propTypes.style
  }

  render() {
    const {
      title,
      containerStyle,
      titleStyle,
      labelStyle,
      inputStyle,
      ...inputProps
    } = this.props
    return (
      <View style={[styles.inputContainer, containerStyle]}>
        {title.length > 0 &&
          <FormLabel labelStyle={[styles.title, titleStyle]}>{title}</FormLabel>
        }
        <FormInput
          containerStyle={styles.formInputContainer}
          inputStyle={[styles.formInput, inputStyle]}
          {...inputProps}
        />
      </View>
    )
  }
}