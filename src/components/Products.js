import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ItemList from "./ItemList";
import "../styles/Products.css";

const Products = () => {
  const orderSize = useSelector((state) => state.orderReducer.numberOfItems);
  const selectItem = (props) => {
    return {
      name: props.name,
      price: props.price,
      ingredients: props.ingredients,
    };
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
