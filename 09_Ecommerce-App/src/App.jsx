import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
