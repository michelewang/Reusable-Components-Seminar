import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { FormItem } from '../../components'
import styles from './styles'
import Initial from './initial'

export default class RandItemForm extends Component {
  render() {
    return (
      <Initial {...this.props}/>
    )
  }
}