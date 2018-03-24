import React, { Component } from 'react'
import { Text, ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BaseForm } from '../../components'
import { showModal, hideModal } from '../../redux/actions'
import styles from './styles'

const mapStateToProps = state => ({ boards: state.boards, user: state.user})

class MainScreen extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <ScrollView contentContainerStyle={styles.container}>
          <BaseForm/>
        </ScrollView>
      </View>
    )
  }
}

export default connect(mapStateToProps)(MainScreen)