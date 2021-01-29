import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { resetOrder } from "../redux/actions/actions";
import OrderList from "./OrderList";
import SauceList from "./SauceList";
import "../styles/Order.css";

const Order = (prop) => {
  const [isButtonActive, setIsButtonActive] = useState(true);
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orderReducer);
  const sauceList = useSelector((state) => state.sauceListReducer);
  const total = orderList.total;

  const handleSendOrder = () => {
    if (orderList.pizza.length === 0) {
      alert("Dodaj coś do zamówienia zanim zamowisz!");
    } else {
      setIsButtonActive(false);
      const order = {
        pizza: [...orderList.pizza],
        sauce: [...orderList.sauce],
        total: orderList.total,
      };
      axios
        .post("http://localhost:3333/api/order", order)
        .then((res) => {
          alert("Zamówienie wysłane!");
          dispatch(resetOrder());
          setIsButtonActive(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="order__container">
      <header className="order__container__header">
        <h1>Twoje zamówienie</h1>
      </header>
      <div className="order__list__container">
        <OrderList orderList={orderList} />
      </div>
      <div className="sauce__list__container">
        <h1>Sosy</h1>
        <SauceList sauceList={sauceList} sauceState={orderList.sauce} />
      </div>
      <div className="summary">
        <span>Suma: {total} PLN</span>
        {isButtonActive ? (
          <button className="button__active" onClick={handleSendOrder}>
            Zamów
          </button>
        ) : (
          <button className="button__inactive">Zamów</button>
        )}
      </div>
    </div>
  );
};

export default Order;
