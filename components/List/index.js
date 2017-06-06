import React, { Component } from "react"
import { StyleSheet, View, Text, TextInput } from "react-native"
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
      cardInput: ""
    }
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
        <Button onClick={this.deleteList} text="&#10005;" />
        <View>
          {this.props.cards.map(card => <Card key={card.id} {...card} />)}
        </View>
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
