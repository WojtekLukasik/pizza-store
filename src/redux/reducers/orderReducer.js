const orderReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD ITEM":
      return [...state, action.payload.item];
    case "REMOVE ITEM":
      const filteredState = state.filter((el) => el.id !== action.payload.id);
      return filteredState;
    default:
      return state;
  }
};

export default orderReducer;
