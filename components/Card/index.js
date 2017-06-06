import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import PropTypes from "prop-types"
import Button from "../Button"
import { deleteCard, moveCard } from "../../redux/actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

const mapDispatchToProps = dispatch => ({
  deleteCard: bindActionCreators(deleteCard, dispatch),
  moveCard: bindActionCreators(moveCard, dispatch)
})

class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    moveCard: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired
  }

  static defaultProps = {
    text: "this is dope like the card team"
  }

  deleteCard = () => {
    this.props.deleteCard(this.props.id)
  }

  moveForward = () => {
    this.props.moveCard(this.props.id, 1)
  }

  moveBackward = () => {
    this.props.moveCard(this.props.id, -1)
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.textWrap}>
          <Text>{this.props.text}</Text>
        </View>
        <View style={styles.wrapButtons}>
          <Button onClick={this.moveBackward} text="<--" />
          <Button onClick={this.moveForward} text="-->" />
          <Button onClick={this.deleteCard} text="X" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fffafa",
    borderRadius: 5,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    margin: 10
  },
  textWrap: {
    flex: 3,
    justifyContent: "center"
  },
  wrapButtons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})

export default connect(null, mapDispatchToProps)(Card)
