import "../styles/PizzaItem.css";

const PizzaItem = (props) => {
  return (
    <li
      key={props.id}
      className="pizza__item"
      onClick={() => props.selectItem(props)}
    >
      <header className="pizza__name">{props.name}</header>
      <div className="pizza__ingredients">
        Feat. {props.ingredients.join(", ")}
      </div>
      <div className="pizza__price">{props.price}</div>
    </li>
  );
};

export default PizzaItem;
