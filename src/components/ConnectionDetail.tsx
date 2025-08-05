/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Connection } from "../data/connections";
import { Colors } from "../constants/constants";
import { Institution } from "../data/accounts";

interface ConnectionDetailProps {
  institution: Institution;
  connection: Connection;
}

const ConnectionDetail: React.FC<ConnectionDetailProps> = ({
  institution,
  connection,
}) => {
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      {!isDisconnecting && (
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "6px",
          }}
        >
          <h1 css={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>
            {connection.name} account connected
          </h1>
          <p
            css={{
              margin: 0,
              fontSize: "14px",
              fontWeight: 400,
              color: Colors.white,
            }}
          >
            To {institution.institutionName} accounts |{" "}
            {formatDate(connection.date)}
          </p>
        </div>
      )}

      <div
        css={{
          marginTop: isDisconnecting ? "16px" : "48px",
          marginBottom: "48px",
          display: "flex",
          gap: "6px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          css={{
            width: "64px",
            height: "64px",
            borderRadius: "14px",
            overflow: "hidden",
            backgroundColor: institution.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={institution.icon}
            alt={institution.institutionName}
            css={{ width: "56px", height: "56px", objectFit: "contain" }}
          />
        </div>

        <div css={{ display: "flex", gap: "6px" }}>
          {/* Institution dots */}
          {[...Array(3)].map((_, index) => (
            <div
              key={`institution-${index}`}
              css={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: institution.color,
              }}
            />
          ))}

          {/* Connection dots */}
          {[...Array(3)].map((_, index) => (
            <div
              key={`connection-${index}`}
              css={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: connection.mainColor,
              }}
            />
          ))}
        </div>

        <div
          css={{
            width: "64px",
            height: "64px",
            borderRadius: "14px",
            overflow: "hidden",
            backgroundColor: connection.mainColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={connection.logo}
            alt={connection.name}
            css={{ width: "56px", height: "56px", objectFit: "contain" }}
          />
        </div>
      </div>

      {isDisconnecting && (
        <h1
          css={{
            margin: 0,
            marginBottom: "16px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Are you sure you want to disconnect?
        </h1>
      )}

      <p
        css={{
          margin: 0,
          fontSize: "14px",
          fontWeight: 400,
          color: Colors.white,
          textAlign: "left",
        }}
      >
        {isDisconnecting ? (
          <span>
            This will stop sharing new date with {institution.institutionName}{" "}
            and may affect {institution.institutionName}'s functionality. We'll
            notify {institution.institutionName} to delete your data but you
            should confirm with them that data previously shared is deleted.
            Plaid will maintain connections between this financial account and
            other connected apps.
          </span>
        ) : (
          <span>
            Connecting your {connection.name} to {institution.institutionName}{" "}
            accounts will help you easily send and receive money.
          </span>
        )}
      </p>

      {/* Actions */}
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "28px",
        }}
      >
        <button
          onClick={() => setIsDisconnecting(true)}
          css={{
            width: "100%",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            boxShadow:
              "0px 0px 2px 0px rgba(255, 255, 255, 0.2) inset, 0 0 2px 0 rgba(17, 17, 18, 0.02), 0 4px 24px 4px rgba(17, 17, 18, 0.03)",
            borderRadius: "12px",
            backdropFilter: "blur(2px)",
            border: "none",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {isDisconnecting ? "Confirm" : "Disconnect"}
        </button>
      </div>
    </div>
  );
};

export default ConnectionDetail;
