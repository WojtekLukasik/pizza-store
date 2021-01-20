import { useSelector } from "react-redux";
import axios from "axios";
import OrderList from "./OrderList";
import SauceList from "./SauceList";
import "../styles/Order.css";

const countSauces = (name, orderList) => {
  let counter = 0;
  orderList.forEach((el) => {
    if (el.type === "SAUCE" && el.name === `sos ${name}`) {
      counter += 1;
    }
  });
  return counter;
};

const Order = (prop) => {
  const orderList = useSelector((state) => state.orderReducer);
  const sauceList = useSelector((state) => state.sauceListReducer);
  const total = orderList.reduce((sum, { price }) => sum + price, 0);

  const handleSendOrder = () => {
    if (orderList.length === 0) {
      alert("Dodaj coś do zamówienia zanim zamowisz!");
    } else {
      let order;
      let pizza = [];
      let sauce = [
        {
          id: "czosnkowy",
          count: countSauces("czosnkowy", orderList),
        },
        {
          id: "ostry",
          count: countSauces("ostry", orderList),
        },
        {
          id: "1000 wysp",
          count: countSauces("1000 wysp", orderList),
        },
      ];
      orderList.forEach((el) => {
        if (el.type === "PIZZA") {
          const item = {
            id: el.id,
            ingredients: [...el.ingredients, ...el.additionalIngredients],
          };
          pizza.push(item);
        }
      });
      sauce = sauce.filter((s) => s.count > 0);
      console.log(sauce);
      sauce.length > 0
        ? (order = { pizza, sauce, total })
        : (order = { pizza, total });
      //   console.log(order);
      axios
        .post("http://localhost:3333/api/order", order)
        .then((res) => {
          console.log(res);
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
        <SauceList sauceList={sauceList} />
      </div>
      <div className="summary">
        <span>Suma: {total} PLN</span>
        <button onClick={handleSendOrder}>Zamów</button>
      </div>
    </div>
  );
};

export default Order;
