import React, { Component } from "react"
import {
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  View,
  TextInput
} from "react-native"
import Modal from 'react-native-modal'
import PropTypes from "prop-types"
import { Constants } from "expo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import TextModal from "../Modal"
import Board from "../Board"
import Button from "../Button"
import { addBoard, showModal, hideModal } from "../../redux/actions"

const BOARDS = [{ name: "Bootcamp" }]
const USERS = { name: "Admin" }

const mapStateToProps = state => ({ boards: state.boards, user: state.user })
const mapDispatchToProps = dispatch => ({
  addBoard: bindActionCreators(addBoard, dispatch),
  showModal: bindActionCreators(showModal, dispatch),
  hideModal: bindActionCreators(hideModal, dispatch)
})

class App extends Component {
  static propTypes = {
    boards: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    addBoard: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      boardInput: ""
    }
  }

  addBoard = () => {
    this.props.addBoard(this.state.boardInput)
  }

  showModal = () => {
    this.props.showModal()
  }

  hideModal = () => {
    this.props.hideModal()
  }

  render() {
    console.log(this.props.boards)
    return (
      <ScrollView style={styles.view}>
        <TextModal onCancel={this.props.hideModal}></TextModal>
        <TextInput
          style={styles.inputs}
          onChangeText={boardInput => {
            this.setState({ boardInput })
          }}
          value={this.state.boardInput}
        />
        <Button onClick={this.props.showModal} text="Create Board" />

        <View>{this.props.boards.map((b, i) => <Board key={i} {...b} />)}</View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  inputs: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  view: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
