import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { FormItem } from '../../components'
import styles from './styles'

export default class Final extends Component {
  static defaultProps ={
    items: {},
    buttonText: 'Submit',
  }

  static propTypes = {
    containerStyle: View.propTypes.style,
    items: PropTypes.object,
    buttonStyle: View.propTypes.style,
    buttonText: PropTypes.string,
    buttonTextStyle: Text.propTypes.style,
  }

  state = {
  }

  handleChange = (key, newText) => {
    this.setState({[key]: newText})
  }

  submit = () => console.log(JSON.stringify(this.state))

  render() {
    const {
      containerStyle,
      buttonStyle,
      buttonText,
      buttonTextStyle,
    } = this.props

    const items = []

    for (key in this.props.items) {
      items.push(
        <FormItem
          key={[key]}
          {...this.props.items[key]}
          onChangeText={this.handleChange.bind(null,[key])}
        />
      )
    }

    return (
      <View style={[styles.formContainer, containerStyle]}>
        {items}
        <TouchableOpacity onPress={this.submit} style={[styles.submit, buttonStyle]}>
          <Text style={[styles.submitText, buttonTextStyle]}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}