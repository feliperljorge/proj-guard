import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import AccountPage from "./pages/Account";
import SecurityAlertsPage from "./pages/SecurityAlerts";
import TransactionsPage from "./pages/Transactions";

function App(): React.JSX.Element {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<AccountPage />} />
          <Route path="/accounts/:accountId" element={<AccountPage />} />
          <Route path="/security-alerts" element={<SecurityAlertsPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
