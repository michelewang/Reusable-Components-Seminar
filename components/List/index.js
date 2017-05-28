import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Card from '../Card';

export default (List = props => (
  <View style={styles.list}>
    <Text>{props.title}</Text>
    {props.cards.map(card => <Card key={card.id} {...card} />)}
  </View>
));

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#9b0200',
    flexDirection: 'column',
    padding: 30,
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ffa700',
    borderRadius: 5,
    margin: 10,
  },
});
