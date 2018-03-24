import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { FormItem } from '../../components'
import styles from './styles'

export default class Final extends Component {
  state = {
  }

  handleChange = (key, newText) => {
    this.setState({[key]: newText})
  }

  submit = () => console.log(JSON.stringify(this.state))

  render() {
    return (
      <View style={styles.formContainer}>
        <FormItem
          title={'Name'}
          placeholder={'John'}
          onChangeText={this.handleChange.bind(null,'name')}
          containerStyle={styles.inputContainer}
          titleStyle={styles.title}
          inputStyle={styles.formInput}
        />
        <FormItem
          title={'Email'}
          placeholder={'john@email.com'}
          onChangeText={this.handleChange.bind(null,'email')}
          containerStyle={styles.inputContainer}
          titleStyle={styles.title}
          inputStyle={styles.formInput}
        />
        <FormItem
          title={'Password'}
          placeholder={'password'}
          onChangeText={this.handleChange.bind(null,'password')}
          containerStyle={styles.inputContainer}
          titleStyle={styles.title}
          inputStyle={styles.formInput}
          secureTextEntry
        />
        <FormItem
          title={'Confirm Password'}
          placeholder={'confirm'}
          onChangeText={this.handleChange.bind(null,'confirm')}
          containerStyle={styles.inputContainer}
          titleStyle={styles.title}
          inputStyle={styles.formInput}
          secureTextEntry
        />
        <TouchableOpacity onPress={this.submit}style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}