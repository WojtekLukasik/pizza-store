import { combineReducers } from "redux";
import pizzaListReducer from "./pizzaListReducer";
import sauceListReducer from "./sauceListReducer";
import ingredientListReducer from "./ingredientListReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  pizzaListReducer,
  sauceListReducer,
  ingredientListReducer,
  orderReducer,
});

export default rootReducer;
