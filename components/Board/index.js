import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import List from '../List';

export default class Board extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    lists: PropTypes.array.isRequired,
  };

  render() {
    return (
      <View style={styles.wrap}>
        <Text style={styles.title}>{this.props.name}</Text>
        <View>
          {this.props.lists.map((l, i) => <List {...l} key={l.id} />)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
