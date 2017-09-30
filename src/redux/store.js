import { createStore } from "redux"
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducer from "./reducer"

const store = createStore(reducer, undefined, autoRehydrate())

const persistor = persistStore(store, {storage: AsyncStorage})
//persistor.purge()

//const store = createStore(reducer);

export default store
