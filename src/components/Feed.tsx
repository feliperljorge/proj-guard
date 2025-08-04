/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { Colors } from "../constants/constants";

interface FeedProps {
  children: ReactNode;
  className?: string;
}

const Feed: React.FC<FeedProps> = ({ children, className = "" }) => {
  return (
    <div
      className={className}
      css={{
        padding: "16px",
        paddingBottom: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
        borderTopLeftRadius: "24px",
        borderTopRightRadius: "24px",
        background: Colors.backgroundBlue,
        boxShadow:
          "0 1px 2px 0 rgba(255, 255, 255, 0.07) inset, 0 0 8px 1px rgba(255, 255, 255, 0.07) inset, 0 0 32px 0 rgba(0, 0, 0, 0.08);",
        position: "relative",
        backdropFilter: "blur(6px)",

        WebkitOverflowScrolling: "touch",
      }}
    >
      {children}
      {/* <div
        css={{
          position: "absolute",
          bottom: "0px",
          left: "-32px",
          right: "-32px",
          height: "8px",
          background: Colors.backgroundBlue,
          zIndex: 1,
        }}
      /> */}
    </div>
  );
};

export default Feed;
