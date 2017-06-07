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
      "default"
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
        <Text style={[styles[this.props.textColor]]}>{this.props.text}</Text>
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
    margin: 3
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
    backgroundColor: "#FFA726"
  },
  arrow: {
    backgroundColor: "#263238"
  },
  delete: {
    height: 25,
    width: 40
  },
  create: {
    backgroundColor: "#283593"
  },
  cancel: {
    backgroundColor: "#D50000"
  }
})
