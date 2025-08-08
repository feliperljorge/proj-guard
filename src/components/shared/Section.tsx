import React from "react";
import { Colors } from "../../constants/constants";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  headerItems?: React.ReactNode[];
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className = "",
  headerItems = [],
}) => {
  return (
    <section
      css={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
      className={className}
    >
      {title && (
        <header
          css={{
            marginLeft: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            css={{
              margin: 0,
              fontSize: "20px",
              fontWeight: "500",
              color: "white",
              lineHeight: "1.4",
            }}
          >
            {title}
          </h2>
          <div css={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {headerItems.map((item, index) => (
              <React.Fragment key={index}>{item}</React.Fragment>
            ))}
          </div>
        </header>
      )}
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export const SectionHeaderButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      css={{
        backgroundColor: "transparent",
        padding: "0 10px",
        height: "32px",
        borderRadius: "100px",
        color: Colors.white,
        border: `1px solid rgba(255, 255, 255, 0.12)`,
        fontSize: "12px",
        fontWeight: 500,
        transition: "all 0.2s ease",
        ...(onClick && {
          ":hover": {
            cursor: "pointer",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            borderColor: "rgba(255, 255, 255, 0.24)",
          },
        }),
      }}
    >
      {children}
    </button>
  );
};

export default Section;
