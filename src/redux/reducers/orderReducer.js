const initialState = {
  pizza: [],
  sauce: [
    {
      id: "czosnkowy",
      count: 0,
      price: 2,
    },
    {
      id: "ostry",
      count: 0,
      price: 2.5,
    },
    {
      id: "1000 wysp",
      count: 0,
      price: 2.5,
    },
  ],
  total: 0,
  numberOfItems: 0,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD PIZZA":
      return {
        pizza: [...state.pizza, action.payload.item],
        sauce: [...state.sauce],
        total: state.total + action.payload.item.price,
        numberOfItems: state.numberOfItems + 1,
      };
    case "REMOVE PIZZA":
      const filteredPizza = state.pizza.filter(
        (el) => el.id !== action.payload.item.id
      );
      return {
        pizza: [...filteredPizza],
        sauce: [...state.sauce],
        total: state.total - action.payload.item.price,
        numberOfItems: state.numberOfItems - 1,
      };
    case "ADD SAUCE":
      let sauces = state.sauce;
      sauces.forEach((sauce) => {
        if (sauce.id === action.payload.item.name) {
          sauce.count += 1;
        }
      });
      return {
        pizza: [...state.pizza],
        sauce: [...sauces],
        total: state.total + action.payload.item.price,
        numberOfItems: state.numberOfItems + 1,
      };

    case "REMOVE SAUCE":
      let remSauces = state.sauce;
      remSauces.forEach((sauce) => {
        if (sauce.id === action.payload.item.name) {
          sauce.count -= 1;
        }
      });
      return {
        pizza: [...state.pizza],
        sauce: [...remSauces],
        total: state.total - action.payload.item.price,
        numberOfItems: state.numberOfItems - 1,
      };
    case "RESET":
      return {
        pizza: [],
        sauce: [
          {
            id: "czosnkowy",
            count: 0,
            price: 2,
          },
          {
            id: "ostry",
            count: 0,
            price: 2.5,
          },
          {
            id: "1000 wysp",
            count: 0,
            price: 2.5,
          },
        ],
        total: 0,
        numberOfItems: 0,
      };
    default:
      return state;
  }
};

export default orderReducer;
