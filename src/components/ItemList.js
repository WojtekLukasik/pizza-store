import { useSelector } from "react-redux";
import Collapsible from "react-collapsible";

import PizzaItem from "./PizzaItem";
import PizzaEditor from "./PizzaEditor";
import "../styles/ItemList.css";

const mapIngredients = (allIngredients, ownIngredients) => {
  let ingredientsArray = [];
  allIngredients.forEach((element) => {
    if (ownIngredients.includes(element.id)) {
      ingredientsArray.push(element.name);
    }
  });
  return ingredientsArray;
};

const ItemList = (props) => {
  const pizzas = useSelector((state) => state.pizzaListReducer);
  const ingredients = useSelector((state) => state.ingredientListReducer);
  const list = pizzas.map((pizza) => (
    <Collapsible
      key={pizza.id}
      lazyRender={true}
      trigger={
        <PizzaItem
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={mapIngredients(ingredients, pizza.ingredients)}
          selectItem={props.selectItem}
        />
      }
    >
      <PizzaEditor
        key={pizza.id}
        name={pizza.name}
        price={pizza.price}
        ingredients={ingredients}
      />
    </Collapsible>
  ));

  return (
    <div className="item__list__container">
      <ul className="item__list">{list}</ul>
    </div>
  );
};

export default ItemList;
