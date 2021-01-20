import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import ItemList from "./ItemList";
import "../styles/Products.css";
import orderReducer from "../redux/reducers/orderReducer";

const Products = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const orderSize = useSelector((state) => state.orderReducer.length);
  console.log(orderSize);
  const selectItem = (props) => {
    const item = {
      name: props.name,
      price: props.price,
      ingredients: props.ingredients,
    };
    setSelectedItem(item);
  };
  return (
    <div className="products__page__container">
      <div className="products__list__container">
        <div className="products__list">
          <header className="products__header">
            <span className="header__text">NASZE PIZZE</span>
          </header>
          <ItemList selectItem={selectItem} />
          <Link to="/order" style={{ textDecoration: "none" }}>
            <button className="order__button">
              <span className="order__button__text">Koszyk</span>
              <span className="order__button__number">{orderSize}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
