import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>You enter a wrong url</h2>
      <button type="button">
        <Link to="/">Back to home</Link>
      </button>
    </>
  );
};

export default NotFound;
