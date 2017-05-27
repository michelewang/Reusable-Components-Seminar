import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export defualt class Card extends Component {
    static propTypes ={
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        moveForward: PropTypes.func.isRequired,
        moveBackward: PropTypes.func.isRequired,
        delete: PropTypes.func.isRequired,
    }

    static defaultProps = {
        text: 'this is dope like the card team',
    }

    render(){
        return (
            <View style={styles.card}>
                <Text style={styles.textWrap}>{this.props.text}</Text>
                <View style={styles.wrapButtons}>
                    <Button onPress={this.props.moveBackward} text='<--'/>
                    <Button onPress={this.props.moveForward} text='-->'/>
                    <Button onPress={this.props.delete} text='X' />
                </View>
            </View>
        )
    }

}


const styles = 
    StyleSheet.create({
        card: {
            backgroundColor: "#b7273e",
            borderColor: "#658d80",
            borderRadius: 10,
            padding: 20,
            display: flex,
            flexDirection: row
        },
        textWrap: {
            flex: 3,
        }
        wrapButtons: {
            flexDirection: 'column',
            justifyContent: 'center'
            alignItems: 'center',
            flex: 1,
        }
    })