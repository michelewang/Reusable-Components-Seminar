import React, { Component } from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import { FormLabel, Text } from "react-native-elements";
import styles from "./styles";
import icon from "../../../assets/icons/app.png";

export default class ChatCard extends Component {
  static defaultProps = {
    name: "",
    description: "",
    image: icon
  };

  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: Image.propTypes.source,
    backgroundContainerStyle: View.propTypes.style,
    imageStyle: Image.propTypes.style,
    nameTextStyle: Text.propTypes.style,
    descTextStyle: Text.propTypes.style // WARNING: There is no TextInput.propTypes.style
  };

  render() {
    const {
      name,
      description,
      image,
      backgroundContainerStyle,
      imageStyle,
      nameTextStyle,
      descTextStyle
    } = this.props;
    return (
      <View style={[styles.backgroundContainer, backgroundContainerStyle]}>
        <Image source={icon} style={[styles.icon, imageStyle]} />
        <View style={styles.textContainer}>
          <Text style={[styles.nameText, nameTextStyle]}>{name}</Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={[styles.descText, descTextStyle]}
          >
            {description}
          </Text>
        </View>
      </View>
    );
  }
}
