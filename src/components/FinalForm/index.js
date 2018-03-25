import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { FormItem } from '../../components'
import styles from './styles'
import Initial from './initial'
import Final from './final'

export default class FinalForm extends Component {
  render() {
    const items = {
      name: {
        title: 'Name',
        placeholder: 'John',
        containerStyle: styles.inputContainer,
        titleStyle: styles.title,
        inputStyle: styles.formInput,
      },
      email: {
        title: 'Email',
        placeholder: 'john@email.com',
        containerStyle: styles.inputContainer,
        titleStyle: styles.title,
        inputStyle: styles.formInput,
      },
      password: {
        title: 'Password',
        placeholder: 'password',
        containerStyle: styles.inputContainer,
        titleStyle: styles.title,
        inputStyle: styles.formInput,
        secureTextEntry: true,
      },
      confirm: {
        title: 'Confirm Password',
        placeholder: 'confirm',
        containerStyle: styles.inputContainer,
        titleStyle: styles.title,
        inputStyle: styles.formInput,
        secureTextEntry: true,
      },
  	}
    return (
      <Final {...this.props} items={items}/>
    )
  }
}