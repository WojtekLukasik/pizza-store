import { useDispatch } from "react-redux";
import { addItemToOrder } from "../redux/actions/actions";
import { v4 } from "uuid";
import "../styles/Order.css";

const SauceElement = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const item = {
      id: v4(),
      type: "SAUCE",
      name: `sos ${props.name}`,
      price: props.price,
    };
    dispatch(addItemToOrder(item));
  };
  return (
    <li className="sauce__element" onClick={handleClick}>
      <span className="sauce__name">{props.name}</span>
      <span className="sauce__price">{props.price} PLN</span>
    </li>
  );
};

export default SauceElement;
