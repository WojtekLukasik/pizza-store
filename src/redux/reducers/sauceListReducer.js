const sauceListReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SAUCES_SUCCESS":
      return action.payload.sauces;
    default:
      return state;
  }
};

export default sauceListReducer;
