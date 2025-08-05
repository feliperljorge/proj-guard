/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { connections, Connection as ConnectionType } from "../data/connections";
import Section from "./shared/Section";
import BottomSheet from "./shared/BottomSheet";
import ConnectionDetail from "./ConnectionDetail";
import { Institution } from "../data/accounts";

interface ConnectionProps {
  connection: ConnectionType;
  onConnectionTap: (connection: ConnectionType) => void;
}

const Connection: React.FC<ConnectionProps> = ({
  connection,
  onConnectionTap,
}) => {
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
      onClick={() => onConnectionTap(connection)}
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

const Connections: React.FC<{ institution: Institution }> = ({
  institution,
}) => {
  const [selectedConnection, setSelectedConnection] =
    useState<ConnectionType | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleConnectionTap = (connection: ConnectionType) => {
    setSelectedConnection(connection);
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
    setSelectedConnection(null);
  };

  return (
    <>
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
            <Connection
              key={connection.id}
              connection={connection}
              onConnectionTap={handleConnectionTap}
            />
          ))}
        </div>
      </Section>

      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
        {selectedConnection && (
          <ConnectionDetail
            connection={selectedConnection}
            institution={institution}
          />
        )}
      </BottomSheet>
    </>
  );
};

export default Connections;
