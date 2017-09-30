import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    margin: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  textWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  wrapButtons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})