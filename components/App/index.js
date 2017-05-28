import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import Board from '../Board';
import Button from '../Button';

const BOARDS = [{ name: 'Bootcamp' }];
const USERS = { name: 'Admin' };

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: BOARDS,
      users: USERS,
      boardInput: '',
    };
  }

  createBoard() {
    this.setState(s => ({ boards: [...s.boards, { name: s.boardInput }] }));
  }

  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.inputs}
          onChangeText={boardInput => {
            this.setState({ boardInput });
          }}
          value={this.state.boardInput}
        />
        <Button onClick={this.createBoard} text="Create Board" />

        <View>{this.state.boards.map((b, i) => <Board key={i} {...b} />)}</View>
      </View>
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
  },
});
