import React, { Component } from 'react'
import { View, TextInput, Modal, StyleSheet, Text } from "react-native"
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { Constants } from "expo"
import Button from "../Button"
import { addBoard, addList, addCard } from "../../redux/actions"

const mapStateToProps = state => ({ visible: state.visible, comp: state.comp, parent: state.parent })
const mapDispatchToProps = dispatch => ({
  addBoard: bindActionCreators(addBoard, dispatch),
  addList: bindActionCreators(addList, dispatch),
  addCard: bindActionCreators(addCard, dispatch)
})

class TextModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: " Enter Name",
    }
  }

  addBoard = () => {
    this.props.addBoard(this.state.input)
    this.props.onCancel()
  }

  addList = () => {
    this.props.addList(this.state.input, this.props.parent)
    this.props.onCancel()
  }

  addCard = () => {
    this.props.addCard(this.state.input, this.props.parent)
    this.props.onCancel()
  }

  render() {
    let str = `Create ${this.props.comp}`
    let button
    if (this.props.comp === "Board") button = <Button onClick={this.addBoard} text={str} style="create" textColor="white" />
    else if (this.props.comp === "List") button = <Button onClick={this.addList} text={str} style="create" textColor="white" />
    else if (this.props.comp === "Card") button = <Button onClick={this.addCard} text={str} style="create" textColor="white" />
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.props.visible}
        >
          <View style={[styles.modal]}>
            <View style={[styles.innerContainer]}>
              <Text style={styles.header}>{this.props.comp}</Text>
              <TextInput
                style={styles.inputs}
                clearTextOnFocus={true}
                onChangeText={input => {
                  this.setState({ input })
                }}
                value={this.state.input}
              />
              <View style={styles.buttons}>
                <Button onClick={this.props.onCancel} text="Cancel" style="cancel" textColor="white" />
                {button}
              </View>
            </View>
          </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  inputs: {
    height: 40,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
  },
  view: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  modal: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TextModal)
