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
import { addCard, deleteList } from "../../redux/actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

const mapDispatchToProps = dispatch => ({
  addCard: bindActionCreators(addCard, dispatch),
  deleteList: bindActionCreators(deleteList, dispatch)
})

class List extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    cards: PropTypes.array.isRequired,
    addCard: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      cardInput: "",
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

  addCard = () => {
    this.props.addCard(this.state.cardInput, this.props.id)
  }

  deleteList = () => {
    this.props.deleteList(this.props.id)
  }

  render() {
    return (
      <View style={styles.wrap}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View
          onLayout={this.setDropZoneValues.bind(this)} 
          style={styles.dropZone}>
          <Text>Drop me here!</Text>
        </View>
        <Button onClick={this.deleteList} text="&#10005;" />
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[this.state.pan.getLayout()]}>
            {this.props.cards.map(card => <Card key={card.id} {...card} />)}
          </Animated.View>
        <TextInput
          style={styles.inputs}
          onChangeText={cardInput => {
            this.setState({ cardInput })
          }}
          value={this.state.cardInput}
        />
        <Button onClick={this.addCard} text="+ Create Card" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dropZone: {
    height: 100,
  },
  wrap: {
    backgroundColor: "#ffa700",
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 5,
    margin: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 10
  },
  inputs: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
})

export default connect(null, mapDispatchToProps)(List)
