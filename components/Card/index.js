import React, { Component } from "react"
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  Vibration
  } from "react-native"
import PropTypes from "prop-types"
import Button from "../Button"
import Overlay from "react-native-overlay"
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
  constructor(props) {
    super(props)
    this.state = {
      pan: new Animated.ValueXY(),
      size: new Animated.Value(80),
    }
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y,
      }]),
      // onPanResponderMove: Animated.event([
      //   null,
      //   {dx: this.state.pan.x, dy: this.state.pan.y},
      // ])
      onPanResponderGrant: (e, gesture) => {
        Animated.spring(
          this.state.size,
          {
            toValue: 120,
            friction: 1,
          }
        ).start()
      },
      onPanResponderRelease: (e, gesture) => {
        // if(this.isDropZone(gesture)) {
        //   this.setState({
        //     // showDraggable: false,
        //     // delete card
        //   });
        // }
        // else {
          Animated.parallel([
            Animated.spring(
              this.state.pan,
              {toValue: {x:0, y:0}}
            ),
            Animated.spring(
              this.state.size,
              {
                toValue: 80,
                friction: 1,
              }
            ),
          ]).start()

        // }
      },
    });
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fffafa",
    borderRadius: 5,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    margin: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
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
