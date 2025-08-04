/** @jsxImportSource @emotion/react */
import React from "react";
import { Colors } from "../../constants/constants";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "16px",
  borderRadius = "4px",
  className = "",
}) => {
  return (
    <div
      className={className}
      css={{
        width,
        height,
        borderRadius,
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
        "@keyframes shimmer": {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
      }}
    />
  );
};

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  lines = 3,
  className = "",
}) => {
  return (
    <div
      className={className}
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "16px",
      }}
    >
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          width={index === 0 ? "80%" : index === 1 ? "60%" : "40%"}
          height="16px"
        />
      ))}
    </div>
  );
};

export { Skeleton, SkeletonLoader };
