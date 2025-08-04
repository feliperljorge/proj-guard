/** @jsxImportSource @emotion/react */
import React from "react";
import { connections, Connection as ConnectionType } from "../data/connections";
import Section from "./shared/Section";

interface ConnectionProps {
  connection: ConnectionType;
}

const Connection: React.FC<ConnectionProps> = ({ connection }) => {
  return (
    <div
      css={{
        width: "72px",
        minWidth: "72px",
        height: "72px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        backdropFilter: "blur(2px)",
        borderRadius: "12px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow:
          "0 0 2px 0 rgba(255, 255, 255, 0.20) inset, 0 0 2px 0 rgba(17, 17, 18, 0.02), 0 4px 16px 4px rgba(17, 17, 18, 0.10)",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow:
            "0 0 4px 0 rgba(255, 255, 255, 0.30) inset, 0 0 4px 0 rgba(17, 17, 18, 0.02), 0 8px 24px 8px rgba(17, 17, 18, 0.15)",
        },
      }}
    >
      <div
        css={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: connection.mainColor,
        }}
      >
        <img
          src={connection.logo}
          alt={`${connection.name} logo`}
          css={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

const Connections: React.FC = () => {
  return (
    <Section title={"Connections"}>
      <div
        css={{
          display: "flex",
          overflowX: "auto",
          gap: "12px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {connections.map((connection) => (
          <Connection key={connection.id} connection={connection} />
        ))}
      </div>
    </Section>
  );
};

export default Connections;
