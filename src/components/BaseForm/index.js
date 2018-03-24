import React, { Component } from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { FormLabel, FormInput, Text } from 'react-native-elements'
import styles from './styles'

export default class BaseForm extends Component {
  state = {
  }

  handleChange = (key, newText) => {
    this.setState({[key]: newText})
  }

  submit = () => console.log(JSON.stringify(this.state))

  render() {
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <FormLabel labelStyle={styles.title}>Name</FormLabel>
          <FormInput
            containerStyle={styles.formInputContainer}
            inputStyle={styles.formInput}
            placeholder={'John'}
            onChangeText={this.handleChange.bind(null, 'name')}
          />
        </View>
        <View style={styles.inputContainer}>
          <FormLabel labelStyle={styles.title}>Email</FormLabel>
          <FormInput
            containerStyle={styles.formInputContainer}
            inputStyle={styles.formInput}
            placeholder={'john@email.com'}
            onChangeText={this.handleChange.bind(null, 'email')}
          />
        </View>
        <View style={styles.inputContainer}>
          <FormLabel labelStyle={styles.title}>Password</FormLabel>
          <FormInput
            secureTextEntry 
            containerStyle={styles.formInputContainer}
            inputStyle={styles.formInput}
            placeholder={'password'}
            onChangeText={this.handleChange.bind(null, 'password')}
          />
        </View>
        <View style={styles.inputContainer}>
          <FormLabel labelStyle={styles.title}>Confirm</FormLabel>
          <FormInput
            secureTextEntry
            containerStyle={styles.formInputContainer}
            inputStyle={styles.formInput} 
            placeholder={'confirm'}
            onChangeText={this.handleChange.bind(null, 'confirm')}
          />
        </View>
        <TouchableOpacity onPress={this.submit}style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}