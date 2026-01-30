import { useAuth } from "../contexts";

const PrivateAdminRoute = ({ children }) => {
  const { isLoggedIn, role } = useAuth();

  if (!isLoggedIn) {
    throw new Response("Unauthorized", { status: 401 });
  }

  if (role !== "admin") {
    throw new Response("Forbidden", { status: 403 });
  }

  return children;
};

export default PrivateAdminRoute;
