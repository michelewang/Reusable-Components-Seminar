import React, { Component } from "react"
import { View, Text } from "react-native"
import PropTypes from "prop-types"
import AddModal from "../AddModal"
import { connect } from "react-redux"
import styles from './styles'
import { Button, List } from '../index'
import { deleteBoard } from "../../redux/actions"

const mapDispatchToProps = { deleteBoard }

class Board extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    lists: PropTypes.array.isRequired,
    deleteBoard: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      addModalVisible: false
    }
  }

  deleteBoard = () => {
    this.props.deleteBoard(this.props.name)
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
          type={'List'}
          boardName={this.props.name}
        />
        <View style={styles.topRow}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Button onClick={this.deleteBoard} text="&#10005;" style="delete" textColor="red" />
        </View>
        <View>
          {this.props.lists.map((l, i) => <List {...l} key={l.id} />)}
        </View>
        <Button 
          onClick={() => this.toggleAddModalVisible(true)} 
          text="+ Create List" 
          style="create" 
          textColor="white" 
        />
      </View>
    )
  }
}

export default connect(null, mapDispatchToProps)(Board)
