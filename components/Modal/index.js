import React, { Component } from 'react'
import { View, TextInput, Modal, StyleSheet } from "react-native"
import { connect } from 'react-redux'
import { Constants } from "expo"
import Button from "../Button"

const mapStateToProps = state => ({ isShowing: state.isShowing })

class TextModal extends Component {
  render() {
    let { onCancel, isShowing } = this.props
    console.log(isShowing)

    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={isShowing}
        style={[styles.modal]}
        >
          <View style={[styles.modal]}>
            <View style={[styles.innerContainer]}></View>
              <View className="confirm-modal-content">
                <TextInput />
                <Button onClick={this.props.onCancel} text="Cancel"></Button>
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
    borderWidth: 1
  },
  view: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  modal: {
    marginTop: Constants.statusBarHeight + 100,
  }
})

export default connect(mapStateToProps, null)(TextModal)
