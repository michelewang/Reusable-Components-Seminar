import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import List from '../List';

export default class Board extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          title: 'list1',
          cards: [{ text: 'text1', id: '1' }, { text: 'text2', id: '2' }],
        },
        {
          title: 'list2',
          cards: [{ text: 'text3', id: '3' }, { text: 'text4', id: '4' }],
        },
      ],
    };
  }

  move = (id, dir) => {
    let index;
    let card;
    let newLists = this.state.lists.map((l, i) => {
      return {
        ...l,
        cards: l.cards.filter(e => {
          if (e.id === id) {
            index = i;
            card = e;
            return false;
          }
          return true;
        }),
      };
    });

    if (!index) throw new Error('you suck: no card with that id');
    if (index + dir < 0 || index + dir >= this.state.lists.length) {
      throw new Error('you illegal with your move');
    }

    this.setState({
      lists: newLists.map((l, i) => {
        if (i === index + dir) {
          return {
            ...l,
            cards: [card, ...l.cards],
          };
        }
        return l;
      }),
    });
  };

  moveBackward = id => this.move(id, -1);
  moveForward = id => this.move(id, 1);

  deleteCard = id => {
    let newLists = this.state.lists.map((l, i) => {
      return {
        ...l,
        cards: l.cards.filter(card => card.id !== id),
      };
    });
    this.setState({ lists: newLists });
  };

  addFunctions = () => {
    this.setState({
      lists: this.state.lists.map(list => ({
        ...list,
        cards: list.cards.map(card => ({
          ...card,
          moveForward: this.moveForward.bind(null, card.id),
          moveBackward: this.moveBackward.bind(null, card.id),
          delete: this.deleteCard.bind(null, card.id),
        })),
      })),
    });
  };

  componentWillMount = () => {
    this.addFunctions();
  };

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <View style={styles.boardWrap}>
          {this.state.lists.map((l, i) => <List {...l} key={l.title} />)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boardWrap: {
    backgroundColor: '#fff',
  },
});
