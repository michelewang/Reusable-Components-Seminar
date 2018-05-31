import React, { Component } from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import { FormLabel, Text } from "react-native-elements";
import styles from "./styles";
import icon from "../../../assets/icons/app.png";

export default class ChatCard extends Component {
  static defaultProps = {
    title: "",
    description: "",
    image: icon
  };

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: Image.propTypes.source,
    containerStyle: View.propTypes.style,
    titleStyle: Text.propTypes.style,
    inputStyle: Text.propTypes.style // WARNING: There is no TextInput.propTypes.style
  };

  render() {
    const {
      title,
      description,
      image,
      containerStyle,
      titleStyle,
      labelStyle
    } = this.props;
    return (
      <View style={[styles.backgroundContainer, containerStyle]}>
        <Image source={icon} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>FirstName LastName</Text>
          <Text ellipsizeMode="tail" numberOfLines={2} style={styles.descText}>
            DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
          </Text>
        </View>
      </View>
    );
  }
}
