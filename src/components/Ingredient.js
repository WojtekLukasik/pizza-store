import "../styles/PizzaEditor.css";

const Ingredient = (props) => {
  const toggleSelection = () => {
    const item = {
      price: props.price,
      name: props.name,
    };
    if (props.additionalIngredients.includes(props.name)) {
      props.removeIngredient(item);
    } else {
      props.addIngredient(item);
    }
  };
  return (
    <li
      className={
        props.additionalIngredients.includes(props.name)
          ? "ingredient__element__selected"
          : "ingredient__element"
      }
      onClick={toggleSelection}
    >
      <span className="ingredient__name">{props.name}</span>
      <span className="ingredient__price">{props.price}</span>
    </li>
  );
};

export default Ingredient;
