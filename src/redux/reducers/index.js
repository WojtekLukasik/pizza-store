import { combineReducers } from "redux";
import pizzaListReducer from "./pizzaListReducer";
import sauceListReducer from "./sauceListReducer";
import ingredientListReducer from "./ingredientListReducer";

const rootReducer = combineReducers({
  pizzaListReducer,
  sauceListReducer,
  ingredientListReducer,
});

export default rootReducer;
