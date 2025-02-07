import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Construction from "./Construction";
import Subscription from "./Subscription";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Under Construction Page Route */}
        <Route path="/under-construction" element={<Construction />} />
        {/* Subscription Page Route */}
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </Router>
  );
}
