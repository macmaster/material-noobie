/**
 * Reduces the next items store state.
 */

import {
  SET_ITEMS,
  SET_ITEM,
  UNSET_ITEM,
} from '../actions/items';

export default (state = {}, action) => {
  switch(action.type) {
    case SET_ITEMS:
      return action.items;
    case SET_ITEM:
      return {
        ...state,
        [action.id]: action.item
      };
    case UNSET_ITEM:
      let { [action.id]: item, ...other } = state;
      return other;
    default:
      return state;
  }
}

