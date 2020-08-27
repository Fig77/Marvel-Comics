import { combineReducers } from 'redux';
import comicReducer from './comics';
import filterReducer from './filter';

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
  filterReducer,
  comicReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default (() => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
})();
