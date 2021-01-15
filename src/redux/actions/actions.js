import axios from "axios";

const fetchPizzasSuccess = (pizzas) => ({
  type: "FETCH_PIZZAS_SUCCESS",
  payload: { pizzas },
});

const fetchSaucesSuccess = (sauces) => ({
  type: "FETCH_SAUCES_SUCCESS",
  payload: { sauces },
});

const fetchIngredientsSuccess = (ingredients) => ({
  type: "FETCH_INGREDIENTS_SUCCESS",
  payload: { ingredients },
});

export const fetchPizzas = () => {
  return async (dispatch) => {
    try {
      let pizzas = await axios.get("http://localhost:3333/api/pizza");
      dispatch(fetchPizzasSuccess(pizzas.data));
    } catch (e) {
      console.log(e);
    }
  };
};
export const fetchSauces = () => {
  return async (dispatch) => {
    try {
      let sauces = await axios.get("http://localhost:3333/api/sauce");
      dispatch(fetchSaucesSuccess(sauces.data));
    } catch (e) {
      console.log(e);
    }
  };
};
export const fetchIngredients = () => {
  return async (dispatch) => {
    try {
      let ingredients = await axios.get("http://localhost:3333/api/ingredient");
      dispatch(fetchIngredientsSuccess(ingredients.data));
    } catch (e) {
      console.log(e);
    }
  };
};
