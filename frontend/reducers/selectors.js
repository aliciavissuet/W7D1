export const allItems = (state) => (
  Object.keys(state.items).map (key => state.items[key])
);