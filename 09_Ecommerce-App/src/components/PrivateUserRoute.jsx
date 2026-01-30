import { useAuth } from "../contexts";

const PrivateUserRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    throw new Response("Unauthorized", { status: 401 });
  }

  return children;
};

export default PrivateUserRoute;
