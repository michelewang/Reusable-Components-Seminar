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
      listInput: ""
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
        <Text style={styles.title}>{this.props.name}</Text>
        <Button onClick={this.deleteBoard} text="&#10005;" />
        <View>
          {this.props.lists.map((l, i) => <List {...l} key={l.id} />)}
        </View>
        <TextInput
          style={styles.inputs}
          onChangeText={listInput => {
            this.setState({ listInput })
          }}
          value={this.state.listInput}
        />
        <Button onClick={this.addList} text="+ Create List" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#fff",
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#000"
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24
  },
  inputs: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
})

export default connect(null, mapDispatchToProps)(Board)
