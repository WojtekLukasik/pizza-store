import { Link } from "react-router-dom";

import "../styles/HomePage.css";
import pizza_video from "../media/pizza_video.mp4";

const HomePage = () => {
  return (
    <>
      <div className="homepage__container">
        <video className="homepage__container__video" autoPlay loop muted>
          <source src={pizza_video} type="video/mp4" />
        </video>
        <div className="homepage__container__text">
          <span>Pizza time</span>
        </div>
        <div className="homepage__container__navigation">
          <Link
            to="/products"
            style={{ textDecoration: "none" }}
            className="navigation__text"
          >
            <span>Zamów pizze</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
