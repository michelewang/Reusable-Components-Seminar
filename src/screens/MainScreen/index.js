import React, { Component } from 'react'
import { Text, ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BaseForm, RandItemForm, FinalForm, FormItem } from '../../components'
import { showModal, hideModal } from '../../redux/actions'
import styles from './styles'

const mapStateToProps = state => ({ boards: state.boards, user: state.user})

class MainScreen extends Component {
  state = {
  }

  handleChange = (key, newText) => {
    this.setState({[key]: newText})
  }

  submit = () => console.log(JSON.stringify(this.state))

  render() {
    return (
      <View style={styles.background}>
        <ScrollView contentContainerStyle={styles.container}>
          <BaseForm
            containerStyle={styles.formContainer}
            buttonStyle={styles.submit}
            buttonText={'Submit'}
            buttonTextStyle={styles.submitText}
            onButtonPress={this.submit}
          >
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
          </BaseForm>
        </ScrollView>
      </View>
    )
  }
}

export default connect(mapStateToProps)(MainScreen)