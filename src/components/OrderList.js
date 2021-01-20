import OrderElement from "./OrderElement";
import "../styles/Order.css";

const OrderList = (props) => {
  const orderList = props.orderList.map((order) => (
    <OrderElement
      key={order.id}
      type={order.type}
      id={order.id}
      name={order.name}
      ingredients={order.ingredients}
      additionalIngredients={order.additionalIngredients}
      price={order.price}
    />
  ));
  return <ul className="order__list">{orderList}</ul>;
};

export default OrderList;
