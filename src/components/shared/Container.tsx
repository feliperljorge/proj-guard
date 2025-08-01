/** @jsxImportSource @emotion/react */
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      css={{
        borderRadius: "24px",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(2px)",
        boxShadow:
          "0 0 2px 0 rgba(255, 255, 255, 0.20) inset, 0 0 2px 0 rgba(17, 17, 18, 0.02), 0 4px 16px 4px rgba(17, 17, 18, 0.10)",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Container;
