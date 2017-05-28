import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        style: PropTypes.oneOf(['forward', 'backward', 'delete', 'close', 'default']).isRequired
    }

    static defaultProps = {
        text: 'Click Me!',
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} style={[styles.button, styles[this.props.style]]}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#1da3f1',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    },
    text: {
        fontSize: 10,
        color: '#9b0200',
    },
    default: {
        backgroundColor: '#898989',
    },
    forward: {
        backgroundColor: '#34ff1a',
    },
    backward: {
        backgroundColor: 'green',
    },
    delete: {
        backgroundColor: '#ff0300',
    },
    create: {
        backgroundColor: '#34ff1a',
    },
});