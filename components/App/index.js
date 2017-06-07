import React, { Component } from "react"
import { ScrollView, StyleSheet, View, TextInput, Text} from "react-native"
import PropTypes from "prop-types"
import { Constants } from "expo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackNavigator } from 'react-navigation'

import Board from "../Board"
import Button from "../Button"
import { addBoard } from "../../redux/actions"

const BOARDS = [{ name: "Bootcamp" }]
const USERS = { name: "Admin" }

const mapStateToProps = state => ({ boards: state.boards, user: state.user })
const mapDispatchToProps = dispatch => ({
  addBoard: bindActionCreators(addBoard, dispatch)
})

class App extends Component {
  static propTypes = {
    boards: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    addBoard: PropTypes.func.isRequired
  }

  static navigationOptions = {
    title: "BOARDS"
  }

  constructor(props) {
    super(props)
    this.state = {
      boardInput: " Enter Board Name"
    }
  }

  addBoard = () => {
    this.props.addBoard(this.state.boardInput)
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.view}>
        <Text style={styles.header}>Your Boards</Text>
        <TextInput
          style={styles.inputs}
          clearTextOnFocus={true}
          onChangeText={boardInput => {
            this.setState({ boardInput })
          }}
          value={this.state.boardInput}
        />
        <Button onClick={this.addBoard} text=" + Create Board" style="create"/>

        <View>{this.props.boards.map((b, i) => <Board key={i} {...b} />)}</View>
      </KeyboardAwareScrollView>
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
    fontSize: 30,
    textAlign: "center"
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
