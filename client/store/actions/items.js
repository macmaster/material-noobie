/**
 * Actions on the items collection.
 */

// Overwrite all items in the collection
export const SET_ITEMS = 'SET_ITEMS';
export const setItems = (items) => ({
  type: SET_ITEMS,
  items,
});

// Set an item in the collection
export const SET_ITEM = 'SET_ITEM';
export const setItem = (id, item) => ({
  type: SET_ITEM,
  id,
  item,
});

// Unset a item from the collection
export const UNSET_ITEM = 'UNSET_ITEM';
export const unsetItem = (id) => ({
  type: UNSET_ITEM,
  id,
});

