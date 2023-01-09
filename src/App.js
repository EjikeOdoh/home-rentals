import "./app.css";
import IconCard from "./components/IconCard";
import Card from "./UI/Card";
import Button from "./components/Button";
import {
  RiMoneyDollarCircleLine,
  RiCommunityLine,
  RiPlantLine,
  RiShieldStarLine,
  RiEye2Line,
  RiStackLine,
} from "react-icons/ri";
import Home from "./Home";
import { mLC } from "./data";

function App() {
  return (
    <div>
      Home Rentals
      <Home />
      <Card />
      <Button />
      <Card />
    </div>
  );
}

export default App;
