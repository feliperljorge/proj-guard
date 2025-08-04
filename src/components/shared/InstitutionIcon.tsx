/** @jsxImportSource @emotion/react */
import React from "react";
import { Institution } from "../../data/accounts";

interface InstitutionIconProps {
  institution: Institution;
  size?: number;
}

const InstitutionIcon: React.FC<InstitutionIconProps> = ({
  institution,
  size = 24,
}) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div
        css={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          backgroundColor: institution.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={institution.icon}
          alt={institution.institutionName}
          css={{
            width: "90%",
            height: "90%",
          }}
        />
      </div>
    </div>
  );
};

export default InstitutionIcon;
