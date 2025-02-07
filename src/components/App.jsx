import React from "react";
import "../styles.css";
import "../reviews.css";
import "../offers.css";
import "../footer.css";
import "../navbar.css";
import "../construction.css";
import "../subscription.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Construction from "./Construction";
import Subscription from "./Subscription";
import Home from "./Home";

export default function App() {
  return (
    <Router basename="/ZENBOWL"> {/* This tells React Router your app is hosted at /ZENBOWL */}
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
