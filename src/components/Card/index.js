import React, { Component } from "react"
import { View, Text } from "react-native"
import PropTypes from "prop-types"
import Button from "../Button"
import { deleteCard, moveCard } from "../../redux/actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import styles from './styles'

const mapDispatchToProps = { deleteCard, moveCard }

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
          <Button onClick={this.moveBackward} text="&#8593;" style="arrow" textColor="white" />
          <Button onClick={this.moveForward} text="&#8595;" style="arrow" textColor="white" />
          <Button onClick={this.deleteCard} text="&#10005;" style="delete" textColor="red" />
        </View>
      </View>
    )
  }
}

export default connect(null, mapDispatchToProps)(Card)
