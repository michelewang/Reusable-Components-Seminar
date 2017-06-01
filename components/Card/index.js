import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button';
import { deleteCard } from '../../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//const mapStateToProps = state => ({boards: state.boards, user: state.user})
const mapDispatchToProps = dispatch => ({
  deleteCard: bindActionCreators(deleteCard, dispatch),
})

class Card extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    moveForward: PropTypes.func.isRequired,
    moveBackward: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
  };

  static defaultProps = {
    text: 'this is dope like the card team',
  };

  deleteCard = () => {
    this.props.deleteCard(this.props.id)
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.textWrap}>
          <Text>{this.props.text}</Text>
        </View>
        <View style={styles.wrapButtons}>
          <Button onClick={this.props.moveBackward} text="<--" />
          <Button onClick={this.props.moveForward} text="-->" />
          <Button onClick={this.deleteCard} text="X" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fffafa',
    borderRadius: 5,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  textWrap: {
    flex: 3,
    justifyContent: 'center',
  },
  wrapButtons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default connect(null, mapDispatchToProps)(Card)
