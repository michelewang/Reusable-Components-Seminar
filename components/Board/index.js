import React, { Component } from "react"
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from "react-native"
import PropTypes from "prop-types"
import Button from "../Button"
import List from "../List"
import { addList, deleteBoard } from "../../redux/actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

const mapDispatchToProps = dispatch => ({
  addList: bindActionCreators(addList, dispatch),
  deleteBoard: bindActionCreators(deleteBoard, dispatch)
})

class Board extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    lists: PropTypes.array.isRequired,
    addList: PropTypes.func.isRequired,
    deleteBoard: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      listInput: "  Enter List Name"
    }
  }

  addList = () => {
    this.props.addList(this.state.listInput, this.props.name)
  }

  deleteBoard = () => {
    this.props.deleteBoard(this.props.name)
  }

  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Button onClick={this.deleteBoard} text="&#10005;" style="delete"/>
        </View>
        <View>
          {this.props.lists.map((l, i) => <List {...l} key={l.id} />)}
        </View>
        <TextInput
          style={styles.inputs}
          clearTextOnFocus={true}
          onChangeText={listInput => {
            this.setState({ listInput })
          }}
          value={this.state.listInput}/>
        <Button onClick={this.addList} text="+ Create List" style="create" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#78909C",
    margin: 5,
    padding: 10,
    borderRadius: 2,
  },
  topRow: {
    flexDirection: "row",
    display: "flex",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24
  },
  inputs: {
    margin: 10,
    padding: 2,
    height: 40,
    borderWidth: 1,
    borderRadius: 4
  }
})

export default connect(null, mapDispatchToProps)(Board)
