import React, { Component } from "react"
import {
  View,
  Text,
  TextInput,
  Dimensions,
} from "react-native"
import PropTypes from "prop-types"
import { deleteList } from "../../redux/actions"
import { connect } from "react-redux"
import { AddModal, Button, Card } from '../index'
import styles from './styles'

const mapDispatchToProps = { deleteList }

class List extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    cards: PropTypes.array.isRequired,
    deleteList: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      addModalVisible: false
    }
  }

  deleteList = () => {
    this.props.deleteList(this.props.id)
  }

  toggleAddModalVisible = (addModalVisible) => {
    this.setState({addModalVisible})
  }

  render() {
    return (
      <View style={styles.wrap}>
        <AddModal 
          addModalVisible={this.state.addModalVisible}
          toggleAddModalVisible={this.toggleAddModalVisible}
          type={'Card'}
          listId={this.props.id}
        />
        <View style={styles.topRow}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Button onClick={this.deleteList} text="&#10005;" style="delete" textColor="red" />
        </View>
        {this.props.cards.map(card => <Card key={card.id} {...card} />)}
        <Button 
          onClick={() => this.toggleAddModalVisible(true)} 
          text="+ Create Card" 
          style="create" 
          textColor="white"
        />
      </View>
    )
  }
}

export default connect(null, mapDispatchToProps)(List)
