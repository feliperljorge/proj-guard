import React from "react";
import Section from "./shared/Section";
import Container from "./shared/Container";
import ViewAllButton from "./shared/ViewAllButton";
import { SecurityAlert, defaultSecurityAlerts } from "../data/securityAlerts";

import { ReactComponent as ChevronIcon } from "../assets/chevron.svg";
import { ReactComponent as ShieldIcon } from "../assets/shield.svg";

const AlertItem: React.FC<{ alert: SecurityAlert }> = ({ alert }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        gap: "12px",
      }}
    >
      <div css={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <ShieldIcon />
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div css={{ color: "white", fontSize: "16px", fontWeight: "500" }}>
            {alert.title}
          </div>
          <div
            css={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            {formatDate(alert.date)}
            {alert.institutions && alert.institutions.length > 0
              ? ` • ${alert.institutions
                  .map((inst) => inst.institutionName)
                  .join(", ")}`
              : ""}
          </div>
        </div>
      </div>
      <div css={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {alert.institutions && alert.institutions.length > 0 && (
          <div css={{ display: "flex", alignItems: "center" }}>
            {alert.institutions.map((institution, index) => (
              <img
                key={institution.id}
                src={institution.icon}
                alt={institution.institutionName}
                css={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  border: index > 0 ? "1px solid #10253A" : "none",
                  marginLeft: index > 0 ? "-8px" : "0px",
                  zIndex: index,
                }}
              />
            ))}
          </div>
        )}
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
            width: "24px",
          }}
        >
          <ChevronIcon />
        </div>
      </div>
    </div>
  );
};

export const AlertsContainer: React.FC<{ alerts: SecurityAlert[] }> = ({
  alerts,
}) => {
  return (
    <Container>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          "& > div:not(:last-child)": {
            borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
          },
        }}
      >
        {alerts.map((alert, _index) => (
          <AlertItem key={alert.id} alert={alert} />
        ))}
      </div>
    </Container>
  );
};

const SecurityAlerts: React.FC<{
  alerts?: SecurityAlert[];
  institutionId?: string;
}> = ({ alerts = [], institutionId }) => {
  const displayAlerts = alerts.length > 0 ? alerts : defaultSecurityAlerts;
  const latestAlerts = displayAlerts.slice(0, 5);
  const hasMoreAlerts = displayAlerts.length > 5;

  return (
    <Section
      title="Security alerts"
      headerItems={
        hasMoreAlerts
          ? [
              <ViewAllButton
                to={
                  institutionId
                    ? `/security-alerts/${institutionId}`
                    : "/security-alerts"
                }
              />,
            ]
          : []
      }
    >
      <AlertsContainer alerts={latestAlerts} />
    </Section>
  );
};

export default SecurityAlerts;
