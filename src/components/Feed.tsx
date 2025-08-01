/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { Colors } from "../constants/constants";

interface FeedProps {
  children: ReactNode;
  className?: string;
  //   maxHeight?: string;
  //   showScrollbar?: boolean;
}

const Feed: React.FC<FeedProps> = ({ children, className = "" }) => {
  return (
    <div
      className={className}
      css={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",

        borderRadius: "24px",
        background: Colors.backgroundBlue,
        boxShadow:
          "0 1px 2px 0 rgba(255, 255, 255, 0.07) inset, 0 0 8px 1px rgba(255, 255, 255, 0.07) inset, 0 0 32px 0 rgba(0, 0, 0, 0.08);",
        backdropFilter: "blur(6px)",

        WebkitOverflowScrolling: "touch",
      }}
    >
      {children}
    </div>
  );
};

export default Feed;
