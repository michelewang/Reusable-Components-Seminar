import React, { Component } from "react"
import {
  Text,
  ScrollView,
  View
} from "react-native"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  AddModal,
  Board,
  Button
} from '../../components'
import { showModal, hideModal } from "../../redux/actions"
import styles from './styles'

const mapStateToProps = state => ({ boards: state.boards, user: state.user})

class PlannerScreen extends Component {
  static propTypes = {
    boards: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      addModalVisible: false
    }
  }

  toggleAddModalVisible = (addModalVisible) => {
    this.setState({addModalVisible})
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <AddModal 
          addModalVisible={this.state.addModalVisible}
          toggleAddModalVisible={this.toggleAddModalVisible}
          type='Board'
        />
        <Text style={styles.header}>Devello!</Text>
        <Button 
          onClick={() => this.toggleAddModalVisible(true)} 
          text="+ Create Board" 
          style="create" 
          textColor="white" 
        />
        <View>{this.props.boards.map((b, i) => <Board key={i} {...b} />)}</View>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps)(PlannerScreen)