/** @jsxImportSource @emotion/react */
import React from "react";
import Section, { SectionHeaderButton } from "./shared/Section";
import Container from "./shared/Container";
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

interface SecurityAlertsProps {
  alerts?: SecurityAlert[];
}

const SecurityAlerts: React.FC<SecurityAlertsProps> = ({ alerts = [] }) => {
  const displayAlerts = alerts.length > 0 ? alerts : defaultSecurityAlerts;

  return (
    <Section
      title="Security alerts"
      headerItems={[<SectionHeaderButton>View all</SectionHeaderButton>]}
    >
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
          {displayAlerts.map((alert, _index) => (
            <AlertItem key={alert.id} alert={alert} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default SecurityAlerts;
