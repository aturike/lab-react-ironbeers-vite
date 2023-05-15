import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Beers from "./components/Beers";
import BeersDetails from "./components/BeersDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/beers/:id" element={<BeersDetails />} />
      <Route path="/random-beer" element={<Dashboard />} />
      <Route path="/new-beer" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
