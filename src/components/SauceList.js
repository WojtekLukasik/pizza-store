import SauceElement from "./SauceElement";
import "../styles/Order.css";
const SauceList = (props) => {
  const sauceList = props.sauceList.map((sauce) => (
    <SauceElement
      key={sauce.id}
      id={sauce.id}
      name={sauce.name}
      price={sauce.price}
    />
  ));
  return <ul className="sauce__list">{sauceList}</ul>;
};

export default SauceList;
