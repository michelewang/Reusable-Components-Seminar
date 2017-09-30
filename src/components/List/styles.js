import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#EF5350",
    flexDirection: "column",
    padding: 5,
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 5,
    margin: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  topRow: {
    height: 40,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 10
  },
  inputs: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4
  }
})