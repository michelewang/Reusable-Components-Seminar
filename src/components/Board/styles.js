import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#78909C",
    margin: 5,
    padding: 10,
    borderRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  topRow: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24
  },
  inputs: {
    margin: 10,
    padding: 2,
    height: 40,
    borderWidth: 1,
    borderRadius: 4
  }
})