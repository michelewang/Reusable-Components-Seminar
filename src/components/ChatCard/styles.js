import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  backgroundContainer: {
    width: "90%",
    aspectRatio: 3,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    padding: 5
  },
  icon: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    margin: 5
  },
  textContainer: {
    justifyContent: "space-between",
    flex: 1
  },
  nameText: {
    color: "rgb(74,74,74)",
    padding: 5,
    fontSize: 18
  },
  descText: {
    padding: 5
  }
}));
