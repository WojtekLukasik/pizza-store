import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizzaToOrder } from "../redux/actions/actions";
import { v4 } from "uuid";

import IngredientsList from "./IngredientsList";
import "../styles/PizzaEditor.css";

const PizzaEditor = (props) => {
  const [totalPrice, setTotalPrice] = useState(props.price);
  const [additionalIngredients, setAdditionalIngredients] = useState([]);
  const dispatch = useDispatch();

  const addToOrder = () => {
    const item = {
      id: v4(),
      type: "PIZZA",
      name: props.name,
      ingredients: props.baseIngredients,
      additionalIngredients: additionalIngredients,
      price: totalPrice,
    };
    dispatch(addPizzaToOrder(item));
    setTotalPrice(props.price);
    setAdditionalIngredients([]);
  };

  const addIngredient = (item) => {
    setTotalPrice(totalPrice + item.price);
    setAdditionalIngredients([...additionalIngredients, item.name]);
  };

  const removeIngredient = (item) => {
    const updatedIngredients = additionalIngredients.filter(
      (ingredient) => ingredient !== item.name
    );
    setTotalPrice(totalPrice - item.price);
    setAdditionalIngredients([...updatedIngredients]);
  };

  return (
    <div className="pizza__editor">
      <div className="pizza__editor__body">
        <div className="pizza__editor__add__ingredients">
          <header className="add__ingredients__header">
            <span>Dodaj składniki</span>
          </header>
          <div className="ingredients__list__container">
            <IngredientsList
              ingredients={props.ingredients}
              addIngredient={addIngredient}
              removeIngredient={removeIngredient}
              additionalIngredients={additionalIngredients}
            />
          </div>
        </div>
        <div className="pizza__editor__summary">
          <span className="pizza__editor__summary__text">
            Suma: {totalPrice}
          </span>
          <button onClick={addToOrder}>Dodaj do koszyka</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaEditor;
