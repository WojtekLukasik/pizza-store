import { useDispatch } from "react-redux";
import { removePizzaFromOrder } from "../redux/actions/actions";

import "../styles/Order.css";

const OrderElement = (props) => {
  const dispatch = useDispatch();
  let ingredientsString = "";
  const handleRemoveItem = () => {
    dispatch(removePizzaFromOrder(props));
  };

  if (props.type === "PIZZA") {
    ingredientsString =
      props.additionalIngredients.length > 0
        ? `${props.ingredients.join(", ")} + ${props.additionalIngredients.join(
            ", "
          )}`
        : `${props.ingredients.join(", ")}`;
  }
  return (
    <li className="order__list__element">
      <div className="order__element__data">
        <span className="element__name">{props.name}</span>
        <span className="element__ingredients">{ingredientsString} </span>
        <span className="element__price">{props.price} PLN</span>
      </div>
      <div className="element__button__container">
        <button onClick={handleRemoveItem} className="element__remove">
          Usuń
        </button>
      </div>
    </li>
  );
};

export default OrderElement;
