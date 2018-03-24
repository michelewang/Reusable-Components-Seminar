import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { FormLabel, FormInput, Text, TextInput } from 'react-native-elements'
import styles from './styles'
import Initial from './initial'
import Final from './final'

export default class FormItem extends Component {
  render() {
    return (
      <Final {...this.props}/>
    )
  }
}