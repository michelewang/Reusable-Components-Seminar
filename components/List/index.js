import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Card from '../Card';

export default (List = props => (
  <View style={styles.wrap}>
    <Text style={styles.title}>{props.title}</Text>
    {props.cards.map(card => <Card key={card.id} {...card} />)}
  </View>
));

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#ffa700',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 5,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 10,
  },
});
