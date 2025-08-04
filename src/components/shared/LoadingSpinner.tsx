/** @jsxImportSource @emotion/react */
import React from "react";
import { Colors } from "../../constants/constants";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  color = Colors.white,
  text,
  className = "",
}) => {
  const sizeMap = {
    small: "16px",
    medium: "32px",
    large: "48px",
  };

  const borderWidthMap = {
    small: "2px",
    medium: "3px",
    large: "4px",
  };

  return (
    <div
      className={className}
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div
        css={{
          width: sizeMap[size],
          height: sizeMap[size],
          border: `${borderWidthMap[size]} solid rgba(255, 255, 255, 0.1)`,
          borderTop: `${borderWidthMap[size]} solid ${color}`,
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          "@keyframes spin": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
        }}
      />
      {text && (
        <p
          css={{
            margin: 0,
            color: "rgba(156, 163, 175, 1)",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
