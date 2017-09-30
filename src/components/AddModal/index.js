import React, { Component } from 'react'
import { View, TextInput, Modal, StyleSheet, Text } from "react-native"
import { connect } from 'react-redux'
import { Button } from '../index'
import { addBoard, addList, addCard } from "../../redux/actions"
import styles from './styles'

const mapDispatchToProps = {
  addBoard,
  addList,
  addCard
}

class AddModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "Enter Name",
    }
  }

  addBoard = () => {
    this.props.addBoard(this.state.input)
    this.props.toggleAddModalVisible(false)
  }

  addList = () => {
    console.log('im here', this.props)
    this.props.addList(this.state.input, this.props.boardId)
    this.props.toggleAddModalVisible(false)
  }

  addCard = () => {
    this.props.addCard(this.state.input, this.props.listId)
    this.props.toggleAddModalVisible(false)
  }

  onCancel = () => {
    this.setState({input: 'Enter Name'})
    this.props.toggleAddModalVisible(false)
  }

  _renderButton = () => {
    const str = `Create ${this.props.type}`
    switch(this.props.type) {
      case 'Board':
        return (
          <Button onClick={this.addBoard} text={str} style="create" textColor="white" />
        )
        break
      case 'List':
        return (
          <Button onClick={this.addList} text={str} style="create" textColor="white" />
        )
        break
      case 'Card':
        return (
          <Button onClick={this.addCard} text={str} style="create" textColor="white" />
        )
        break
      default:
        break
    }
  }

  render() {
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.props.addModalVisible}
        >
          <View style={styles.modal}>
            <View style={styles.innerContainer}>
              <Text style={styles.header}>{this.props.type}</Text>
              <TextInput
                style={styles.inputs}
                clearTextOnFocus={true}
                onChangeText={input => {
                  this.setState({ input })
                }}
                value={this.state.input}
              />
              <View style={styles.buttons}>
                <Button 
                  onClick={this.onCancel} 
                  text="Cancel" 
                  style="cancel" 
                  textColor="white" 
                />
                {this._renderButton()}
              </View>
            </View>
          </View>
      </Modal>
    )
  }
}

export default connect(null, mapDispatchToProps)(AddModal)
