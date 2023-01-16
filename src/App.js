import "./app.css";
import Home from "./Home";
import "./index.css";

// Routing
import { Routes, Route } from "react-router-dom";

//  components

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
