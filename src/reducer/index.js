import { combineReducers } from 'redux';
import comicReducer from './comics';
import filterReducer from './filter';

const rootReducer = combineReducers({
  filterReducer,
  comicReducer,
});

export default rootReducer;
