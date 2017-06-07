import React, { Component } from "react"
import { StyleSheet, View, TouchableOpacity, Text } from "react-native"
import PropTypes from "prop-types"

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.oneOf(["red", "white"]),
    onClick: PropTypes.func.isRequired,
    style: PropTypes.oneOf([
      "arrow",
      "delete",
      "cancel",
      "create",
      "default",
      "boards"
    ]).isRequired,
    textStyle: PropTypes.oneOf([
      "board",
    ])
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
        <Text style={[textStyles[this.props.textStyle], styles[this.props.textColor]]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
  },
  red: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#D50000",
  },
  white: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  default: {
    backgroundColor: "#FFA726",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  boards: {
    backgroundColor: "#DD2C00",
    height: 150,
    width: 225,
    margin: 70,
  },
  arrow: {
    backgroundColor: "#263238"
  },
  delete: {
    height: 25,
    width: 40
  },
  create: {
    backgroundColor: "#283593",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  cancel: {
    backgroundColor: "#D50000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  }
})

const textStyles = StyleSheet.create({
  default: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  board: {
    fontSize: 45
  }
})
