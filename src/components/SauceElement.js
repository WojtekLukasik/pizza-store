import { useDispatch, useSelector } from "react-redux";
import {
  addSauceToOrder,
  removeSauceFromOrder,
} from "../redux/actions/actions";
import { v4 } from "uuid";
import "../styles/Order.css";

const SauceElement = (props) => {
  const count = props.sauceState.filter((el) => el.id === props.name)[0];

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addSauceToOrder(props));
  };
  const handleRemove = () => {
    dispatch(removeSauceFromOrder(props));
  };

  return (
    <div className="sauce__element">
      <span className="sauce__count">{count.count}</span>
      <span className="sauce__name">{props.name}</span>
      <span className="sauce__price">{props.price} PLN</span>

      <button className="sauce__button" onClick={() => handleAdd()}>
        +
      </button>
      {count.count > 0 ? (
        <button className="sauce__button" onClick={() => handleRemove()}>
          -
        </button>
      ) : (
        <button className="inactive__button">-</button>
      )}
    </div>
  );
};

export default SauceElement;
