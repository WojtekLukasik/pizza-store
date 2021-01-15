const ingredientListReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_INGREDIENTS_SUCCESS":
      return action.payload.ingredients;
    default:
      return state;
  }
};

export default ingredientListReducer;
