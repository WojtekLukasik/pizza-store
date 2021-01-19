import Ingredient from "./Ingredient";

import "../styles/PizzaEditor.css";

const IngredientsList = (props) => {
  const ingredientsList = props.ingredients.map((ingredient) => (
    <Ingredient
      key={ingredient.id}
      name={ingredient.name}
      price={ingredient.price}
      addIngredient={props.addIngredient}
      removeIngredient={props.removeIngredient}
      additionalIngredients={props.additionalIngredients}
    />
  ));
  return <ul className="add__ingredients__list">{ingredientsList}</ul>;
};

export default IngredientsList;
