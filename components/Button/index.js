import React, { Component } from "react"
import { StyleSheet, View, TouchableOpacity, Text } from "react-native"
import PropTypes from "prop-types"

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.oneOf([
      "arrow",
      "delete",
      "create",
      "default",
      "boards"
    ]).isRequired
  }

  static defaultProps = {
    style: "default",
    text: "Click Me!"
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onClick}
        style={[styles.button, styles[this.props.style]]}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 3
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  default: {
    backgroundColor: "#FFA726"
  },
  boards: {
    backgroundColor: "#DD2C00",
    height: 150,
    width: 225,
    margin: 60,
  },
  arrow: {
    backgroundColor: "#263238"
  },
  delete: {
    backgroundColor: "#D50000",
    height: 25,
    width: 25
  },
  create: {
    backgroundColor: "#283593"
  }
})
