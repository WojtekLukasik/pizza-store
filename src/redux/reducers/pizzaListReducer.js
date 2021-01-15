const pizzaListReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PIZZAS_SUCCESS":
      return action.payload.pizzas;
    default:
      return state;
  }
};

export default pizzaListReducer;
