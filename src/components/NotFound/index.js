import { Link } from "react-router-dom";
import "./index.css";

const NotFound = () => (
  <div className="not-found-route-container">
    <h1 className="not-found-heading">Page Not Found !!</h1>
    <p className="not-found-message">
      Sorry, the page you are looking for does not exist.
    </p>
    <Link to="/" className="home-link">
      Go to Home
    </Link>
  </div>
);

export default NotFound;
