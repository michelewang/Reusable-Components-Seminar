import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { Constants } from 'expo'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Board from '../Board';
import Button from '../Button';
import {addBoard} from '../../redux/actions'

const BOARDS = [{ name: 'Bootcamp' }];
const USERS = { name: 'Admin' };

const mapStateToProps = state => ({boards: state.boards, user: state.user})
const mapDispatchToProps = dispatch => ({
  addBoard: bindActionCreators(addBoard, dispatch),
})

class App extends Component {
  static propTypes ={
    boards: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    addBoard: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      boardInput: '',
    };
  }

  createBoard = () => {
    this.props.addBoard(this.state.boardInput)
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <TextInput
          style={styles.inputs}
          onChangeText={boardInput => {
            this.setState({ boardInput });
          }}
          value={this.state.boardInput}
        />
        <Button onClick={this.createBoard} text="Create Board" />

        <View>{this.props.boards.map((b, i) => <Board key={i} {...b} />)}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  view: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
