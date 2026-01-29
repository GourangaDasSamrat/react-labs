import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page not found
        </h2>

        <p className="text-gray-600 mb-6">
          You’ll be redirected to the homepage in{" "}
          <span className="font-semibold text-blue-600">{countdown}</span>{" "}
          seconds.
        </p>

        {/* Manual option */}
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Go back home now
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
