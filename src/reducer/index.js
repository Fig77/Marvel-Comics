import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import comicReducer from './comics';
import filterReducer from './filter';

const rootReducer = combineReducers({
  filterReducer,
  comicReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (() => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
})();
