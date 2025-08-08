import React from "react";
import { ReactComponent as PlaidLogo } from "../assets/Plaid Logo.svg";
import { useNavigate } from "react-router-dom";
import { defaultUser } from "../data/user";

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const navigate = useNavigate();

  return (
    <header
      css={{
        marginTop: "8px",
        marginLeft: "10px",
        marginRight: "10px",
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
      {/* Hamburger Menu */}
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
            height: "30px",
            width: "30px",
            padding: "8px",
            transition: "background-color 0.3s ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "3px",
          }}
        >
          {[1, 2, 3].map((index) => (
            <span
              key={index}
              css={{
                display: "block",
                width: "100%",
                height: "1.5px",
                background: "white",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </button>
      </div>

      <PlaidLogo />

      <div
        onClick={() => navigate("/profile")}
        css={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={defaultUser.avatar}
          alt="Profile"
          css={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "all 0.3s ease",
            objectFit: "cover",
            boxShadow:
              "0 2.5px 14px 0 rgba(0, 0, 0, 0.05), 0 0.286px 0.286px 0.143px rgba(255, 255, 255, 0.95) inset, 0 0 0.762px 0 rgba(17, 17, 18, 0.02), 0 2.286px 4.571px 0 rgba(17, 17, 18, 0.12)",
            backdropFilter: "blur(4px)",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
