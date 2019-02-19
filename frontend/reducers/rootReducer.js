import todosReducer from './todosReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  items: todosReducer,
})

export default rootReducer;