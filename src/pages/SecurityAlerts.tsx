import React from "react";
import SecurityAlerts from "../components/SecurityAlerts";

function SecurityAlertsPage(): React.JSX.Element {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Security Alerts</h1>
      <SecurityAlerts />
    </div>
  );
}

export default SecurityAlertsPage;
