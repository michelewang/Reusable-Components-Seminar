import React, { Component } from "react"
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native"
import PropTypes from "prop-types"
import Button from "../Button"
import Card from "../Card"
import { deleteList, showModal, hideModal } from "../../redux/actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

const mapDispatchToProps = dispatch => ({
  deleteList: bindActionCreators(deleteList, dispatch),
  showModal: bindActionCreators(showModal, dispatch),
  hideModal: bindActionCreators(hideModal, dispatch)
})

class List extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    cards: PropTypes.array.isRequired,
    deleteList: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      cardInput: " Enter Card Name",
      showDraggable: true,
      pan: new Animated.ValueXY(),
    }

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null,{
            dx: this.state.pan.x,
            dy: this.state.pan.y
        }]),
        onPanResponderRelease: (e, gesture) => {
          if(this.isDropZone(gesture)) {
            this.setState({
              showDraggable: false,
            });
          }
          else {
            Animated.spring(
              this.state.pan,
              {toValue: {x:0, y:0}}
            ).start();
          }
        }
      });
  }

  setDropZoneValues = (event) => {
    this.setState({
        dropZoneValues : event.nativeEvent.layout
    });
  }

  isDropZone = (gesture) => {
    var dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  deleteList = () => {
    this.props.deleteList(this.props.id)
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
        <View
          style={[styles.dropZone, styles.topRow]}
          onLayout={this.setDropZoneValues.bind(this)}
        >
          <Text style={styles.title}>{this.props.title}</Text>
          <Text>Drop me here!</Text>
          <Button onClick={this.deleteList} text="&#10005;" style="delete" textColor="red" />
        </View>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[this.state.pan.getLayout()]}>
            {this.props.cards.map(card => <Card key={card.id} {...card} />)}
          </Animated.View>
        <Button onClick={() => this.showModal("Card", this.props.id)} text="+ Create Card" style="create" textColor="white" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dropZone: {
    height: 50,
  },
  wrap: {
    backgroundColor: "#EF5350",
    flexDirection: "column",
    padding: 5,
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 5,
    margin: 10
  },
  topRow: {
    flexDirection: "row",
    display: "flex",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 10
  },
  inputs: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4
  }
})

export default connect(null, mapDispatchToProps)(List)
