/** @jsxImportSource @emotion/react */
import React from "react";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className = "",
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
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <h2
            css={{
              margin: 0,
              fontSize: "20px",
              fontWeight: "600",
              color: "white",
              lineHeight: "1.4",
            }}
          >
            {title}
          </h2>
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

export default Section;
