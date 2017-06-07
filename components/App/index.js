import React, { Component } from "react"
import {
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  View,
  TextInput
} from "react-native"
import PropTypes from "prop-types"
import { Constants } from "expo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { setCustomText } from 'react-native-global-props';

import TextModal from "../Modal"
import Board from "../Board"
import Button from "../Button"
import { showModal, hideModal } from "../../redux/actions"

const BOARDS = [{ name: "Bootcamp" }]
const USERS = { name: "Admin" }

const customTextProps = {
  style: {
    fontFamily: "Futura"
  }
}
setCustomText(customTextProps);

const mapStateToProps = state => ({ boards: state.boards, user: state.user})
const mapDispatchToProps = dispatch => ({
  showModal: bindActionCreators(showModal, dispatch),
  hideModal: bindActionCreators(hideModal, dispatch)
})

class App extends Component {
  static propTypes = {
    boards: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  }

  showModal = comp => {
    this.props.showModal(comp)
  }

  hideModal = () => {
    this.props.hideModal()
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <KeyboardAwareScrollView>
          <TextModal onCancel={this.props.hideModal} />
        </KeyboardAwareScrollView>
        <Text style={styles.header}>Welcome to Devello!</Text>
        <Button onClick={() => this.showModal("Board")} text=" + Create Board" style="create" textColor="white" />
        <View>{this.props.boards.map((b, i) => <Board key={i} {...b} />)}</View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  inputs: {
    marginTop: 30,
    height: 40,
    borderColor: "white",
    borderWidth: 1,
  },
  view: {
    flex: 1,
    height: 10,
    backgroundColor: "white",
    marginTop: Constants.statusBarHeight
  },
  header: {
    marginTop: 10,
    fontSize: 30,
    textAlign: "center"
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
