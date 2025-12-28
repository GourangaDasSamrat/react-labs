import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar,Footer } from "./components";

const App = () => {
  return (
    <div className="component">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
