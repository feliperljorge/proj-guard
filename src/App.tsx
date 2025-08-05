import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import AccountPage from "./pages/Account";
import SecurityAlertsPage from "./pages/SecurityAlerts";
import TransactionsPage from "./pages/Transactions";
import Profile from "./pages/Profile";
import { useScrollToTop } from "./hooks/useScrollToTop";

function App(): React.JSX.Element {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<AccountPage />} />
          <Route path="/accounts/:accountId" element={<AccountPage />} />
          <Route path="/security-alerts" element={<SecurityAlertsPage />} />
          <Route
            path="/security-alerts/:accountId"
            element={<SecurityAlertsPage />}
          />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route
            path="/transactions/:accountId"
            element={<TransactionsPage />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

// Component that uses the scroll-to-top hook
function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default App;
