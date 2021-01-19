import { Link } from "react-router-dom";
import "../styles/App.css";

const ErrorPage = () => {
  return (
    <div className="error__page">
      <span>
        <h1> This page does not exist :C</h1>
      </span>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>Don't worry, just click me ;)</h1>
      </Link>
    </div>
  );
};

export default ErrorPage;
