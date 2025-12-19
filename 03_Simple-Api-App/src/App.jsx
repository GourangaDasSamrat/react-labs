import UserGrid from "./components/UserGrid";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>User Directory</h1>
        <p>Modern profile cards with clean architecture</p>
      </header>

      <UserGrid />
    </div>
  );
};

export default App;
