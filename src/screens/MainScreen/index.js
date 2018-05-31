import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  BaseForm,
  RandItemForm,
  FinalForm,
  FormItem,
  ChatCard
} from "../../components";
import { showModal, hideModal } from "../../redux/actions";
import styles from "./styles";

const mapStateToProps = state => ({ boards: state.boards, user: state.user });

class MainScreen extends Component {
  state = {};

  handleChange = (key, newText) => {
    this.setState({ [key]: newText });
  };

  submit = () => console.log(JSON.stringify(this.state));

  render() {
    return (
      <View style={styles.background}>
        <ScrollView contentContainerStyle={styles.container}>
          <ChatCard
            title={"Firstname Lastname"}
            description={"description yeet"}
          />
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(MainScreen);
