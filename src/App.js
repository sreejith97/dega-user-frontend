import "./App.css";
import { BeakerIcon, TrendingDown } from "@heroicons/react/solid";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route, Link } from "react-router-dom";
import Credentials from "./pages/Credentials/Credentials";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/*" element={<Dashboard />}></Route>
        <Route path="/users/*" element={<Credentials />}></Route>
      </Routes>
    </div>
  );
}

export default App;
