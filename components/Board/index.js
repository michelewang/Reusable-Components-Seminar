import React, { Component } from "react"
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native"
import PropTypes from "prop-types"
import TextModal from "../Modal"
import Button from "../Button"
import List from "../List"
import { deleteBoard, showModal, hideModal } from "../../redux/actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

const mapDispatchToProps = dispatch => ({
  deleteBoard: bindActionCreators(deleteBoard, dispatch),
  showModal: bindActionCreators(showModal, dispatch),
  hideModal: bindActionCreators(hideModal, dispatch)
})

class Board extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    lists: PropTypes.array.isRequired,
    deleteBoard: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  }

  deleteBoard = () => {
    this.props.deleteBoard(this.props.name)
  }

  showModal = (comp, parent) => {
    this.props.showModal(comp, parent)
  }

  hideModal = () => {
    this.props.hideModal()
  }

  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Button onClick={this.deleteBoard} text="&#10005;" style="delete" textColor="red" />
        </View>
        <View>
          {this.props.lists.map((l, i) => <List {...l} key={l.id} />)}
        </View>
        <Button onClick={() => this.showModal("List", this.props.name)} text="+ Create List" style="create" textColor="white" />
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  topRow: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
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
