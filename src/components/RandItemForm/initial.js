import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { FormItem } from '../../components'
import styles from './styles'

export default class Initial extends Component {
  state = {
  }

  submit = () => console.log(JSON.stringify(this.state))

  render() {
    return (
      <View style={styles.formContainer}>
        <FormItem
          title={'Name'}
          placeholder={'John'}
        />
        <FormItem
          title={'Email'}
          placeholder={'john@email.com'}
        />
        <FormItem
          title={'Password'}
          placeholder={'password'}
        />
        <FormItem
          title={'Confirm Password'}
          placeholder={'confirm'}
        />
        <TouchableOpacity onPress={this.submit}style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}