import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import PropTypes from 'prop-types'
import Card from '../Card'

export default List

const List = props => (
    <View style = {styles.list}>
        <Text>{props.title}</Text>
        {props.cards.map(card => <Card key={card.id} {...card} />)}
    </View>
)

List.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
    list: {
        border: 10,
        backgroundColor: '#ffaa11',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
})
