const orderReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD ITEM":
      return [...state, action.payload.item];
    default:
      return state;
  }
};

export default orderReducer;
