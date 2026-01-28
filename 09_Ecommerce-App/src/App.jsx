import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
