import lodash from 'lodash';
import {ADD_SINGLE_ITEM, ADD_STORE_ITEMS} from '../actions/todosAction';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STORE_ITEMS: 
      let newState = lodash.merge({}, state);
      action.items.forEach((item, idx) => {
        let newId = Object.keys(state).length + 1 + idx;
        item.id = newId;
        newState[newId] = item;
      })
      return newState;
    case ADD_SINGLE_ITEM:
      let newState1 = lodash.merge({}, state);
      newState1[Object.keys(state).length + 1] = action.item;
      return newState1;
    default:
      return state;
  }
}

export default todosReducer;