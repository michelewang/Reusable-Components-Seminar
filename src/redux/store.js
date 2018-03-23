import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import reducer from './reducer'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk, logger))
  const persistor = persistStore(store)

  // Uncomment to clear persisting data cache
  // persistor.purge()
  return { store, persistor }
}