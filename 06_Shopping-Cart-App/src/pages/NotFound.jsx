import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirect after 10 seconds
    const redirect = setTimeout(() => {
      navigate("/");
    }, 10000);

    // Cleanup
    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="col-md-6 text-center">
          <div className="mb-4">
            <i
              className="bi bi-exclamation-triangle-fill text-warning"
              style={{ fontSize: "100px" }}
            ></i>
          </div>

          <h1 className="display-1 fw-bold text-primary notfound-404">404</h1>

          <h2 className="mb-3">Page Not Found</h2>
          <p className="text-muted mb-4">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="alert alert-info d-inline-block mb-4">
            <i className="bi bi-clock-fill me-2"></i>
            Redirecting to home in{" "}
            <strong className="text-primary fs-4">{countdown}</strong>{" "}
            seconds...
          </div>

          <div>
            <button
              onClick={() => navigate("/")}
              className="btn btn-primary btn-lg me-2"
            >
              <i className="bi bi-house-fill me-2"></i>
              Go Home Now
            </button>
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline-secondary btn-lg"
            >
              <i className="bi bi-arrow-left me-2"></i>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
