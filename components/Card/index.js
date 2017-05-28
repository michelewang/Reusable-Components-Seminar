import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button';

export default class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    moveForward: PropTypes.func.isRequired,
    moveBackward: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
  };

  static defaultProps = {
    text: 'this is dope like the card team',
  };

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.textWrap}>{this.props.text}</Text>
        <View style={styles.wrapButtons}>
          <Button onClick={this.props.moveBackward} text="<--" />
          <Button onClick={this.props.moveForward} text="-->" />
          <Button onClick={this.props.delete} text="X" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fffafa',
    borderColor: '#898989',
    borderRadius: 10,
    padding: 50,
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  textWrap: {
    flex: 3,
  },
  wrapButtons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
