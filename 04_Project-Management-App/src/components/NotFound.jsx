import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>You entered a wrong URL</h2>
      <button type="button">
        <Link to="/">Back to home</Link>
      </button>
    </div>
  );
};

export default NotFound;
