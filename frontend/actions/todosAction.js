const ADD_STORE_ITEMS="ADD_STORE_ITEMS";
const ADD_SINGLE_ITEM="ADD_SINGLE_ITEM";

const addStoreItems = (items) => ({
  type: ADD_STORE_ITEMS,
  items
})

const addSingleItem = (item) => ({
  type: ADD_SINGLE_ITEM,
  item
})
window.addSingleItem = addSingleItem;
window.addStoreItems = addStoreItems;
export {addStoreItems, addSingleItem, ADD_SINGLE_ITEM, ADD_STORE_ITEMS};