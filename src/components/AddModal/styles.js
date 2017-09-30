import { StyleSheet } from 'react-native'
import { Constants } from "expo"

export default styles = StyleSheet.create({
  inputs: {
    height: 40,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
  },
  view: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  modal: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  }
})