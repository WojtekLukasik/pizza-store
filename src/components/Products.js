import { Link } from "react-router-dom";
import { useState } from "react";

import ItemList from "./ItemList";
import "../styles/Products.css";

const Products = () => {
  const [selectedItem, setSelectedItem] = useState(null);
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
        </div>
      </div>
    </div>
  );
};

export default Products;
