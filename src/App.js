import "./App.css";
import FoodCategory from "./components/FoodCategories";
import Navbar from "./components/Navbar";
// import Main from './components/Main';
import { Outlet } from "react-router-dom";

// outlet is used to push route components
function App() {
  return (
    <div className="App">
      <Navbar />
      <FoodCategory />
      <Outlet />
    </div>
  );
}

export default App;
