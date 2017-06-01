import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import List from '../List';

export default class Board extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    lists: PropTypes.array.isRequired,
  };

  move = (id, dir) => {
    let index;
    let card;
    let newLists = this.state.lists.map((l, i) => ({
      ...l,
      cards: l.cards.filter(e => {
        if (e.id === id) {
          index = i;
          card = e;
          return false;
        }
        return true;
      }),
    }));

    if (index == null) throw new Error('you suck: no card with that id');
    if (index + dir < 0 || index + dir >= this.state.lists.length) {
      throw new Error('you illegal with your move');
    }

    this.setState({
      name: this.props.name,
      lists: newLists.map(
        (l, i) => (i === index + dir ? { ...l, cards: [card, ...l.cards] } : l)
      ),
    });
  };

  moveBackward = id => this.move(id, -1);
  moveForward = id => this.move(id, 1);

  // deleteCard = id => {
  //   let newLists = this.state.lists.map((l, i) => {
  //     return {
  //       ...l,
  //       cards: l.cards.filter(card => card.id !== id),
  //     };
  //   });
  //   this.setState({ lists: newLists });
  // };

  // addFunctions = () => {
  //   this.setState({
  //     //lists: this.state.lists.map(list => ({
  //       ...list,
  //       cards: list.cards.map(card => ({
  //         ...card,
  //         moveForward: this.moveForward.bind(null, card.id),
  //         moveBackward: this.moveBackward.bind(null, card.id),
  //         deleteCard: this.deleteCard.bind(null, card.id),
  //       })),
  //     })),
  //   });
  // };

  // componentWillMount = () => {
  //   this.addFunctions();
  // };

  render() {
    console.log(this.props.lists)
    return (
      <View style={styles.wrap}>
        <Text style={styles.title}>{this.props.name}</Text>
        <View>
          {this.props.lists.map((l, i) => <List {...l} key={l.title} />)}
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
