/** @jsxImportSource @emotion/react */

import React from "react";
import { useParams } from "react-router-dom";

import { PageHeader } from "../components/shared/PageHeader";
import { AlertsContainer } from "../components/SecurityAlerts";
import { defaultSecurityAlerts } from "../data/securityAlerts";
import { defaultInstitutions } from "../data/accounts";

function SecurityAlertsPage(): React.JSX.Element {
  const { accountId } = useParams<{ accountId?: string }>();

  const alerts = accountId
    ? defaultSecurityAlerts.filter((alert) =>
        alert.institutions?.some((inst) => inst.id === accountId)
      )
    : defaultSecurityAlerts;

  const institution = accountId
    ? defaultInstitutions.find((inst) => inst.id === accountId)
    : null;

  const pageTitle = institution
    ? `Security alerts - ${institution.institutionName}`
    : "Security alerts";

  return (
    <div
      css={{
        padding: "16px",
        paddingBottom: "48px",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <PageHeader title={pageTitle} />

      <AlertsContainer alerts={alerts} />
    </div>
  );
}

export default SecurityAlertsPage;
