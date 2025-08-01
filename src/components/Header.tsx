/** @jsxImportSource @emotion/react */
import React from "react";
import { Colors } from "../constants/constants";

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header
      css={{
        maxWidth: "1200px",
        height: "60px",
        maxHeight: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        padding: "0px 16px",
        borderRadius: "100px",
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(2px)",
        boxShadow:
          "0 0 2px 0 rgba(255, 255, 255, 0.20) inset, 0 0 2px 0 rgba(17, 17, 18, 0.02), 0 4px 16px 4px rgba(17, 17, 18, 0.10)",
      }}
    >
      {/* Left - Hamburger Menu */}
      <div
        css={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          onClick={onMenuToggle}
          css={{
            background: "none",
            border: "none",
            cursor: "pointer",
            height: "32px",
            width: "32px",
            padding: "8px",
            transition: "background-color 0.3s ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <span
            css={{
              display: "block",
              width: "100%",
              height: "3px",
              background: "white",
              borderRadius: "2px",
              transition: "all 0.3s ease",
            }}
          />
          <span
            css={{
              display: "block",
              width: "100%",
              height: "3px",
              background: "white",
              borderRadius: "2px",
              transition: "all 0.3s ease",
            }}
          />
          <span
            css={{
              display: "block",
              width: "100%",
              height: "3px",
              background: "white",
              borderRadius: "2px",
              transition: "all 0.3s ease",
            }}
          />
        </button>
      </div>

      {/* Center - Icon */}
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>

      {/* Right - Profile Picture */}
      <div
        css={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={
            "https://img.freepik.com/premium-photo/ai-generated-images-build-user-profile-page_1290175-101.jpg"
          }
          alt="Profile"
          css={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            // border: "2px solid rgba(255, 255, 255, 0.3)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            objectFit: "cover",
            boxShadow:
              "0 2.286px 13.714px 0 rgba(0, 0, 0, 0.05), 0 0.286px 0.286px 0.143px rgba(255, 255, 255, 0.95) inset, 0 0 0.762px 0 rgba(17, 17, 18, 0.02), 0 2.286px 4.571px 0 rgba(17, 17, 18, 0.12)",
            backdropFilter: "blur(4px)",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
