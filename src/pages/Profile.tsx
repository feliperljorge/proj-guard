/** @jsxImportSource @emotion/react */
import React from "react";
import Section from "../components/shared/Section";
import Container from "../components/shared/Container";
import { Colors } from "../constants/constants";
import { PageHeader } from "../components/shared/PageHeader";
import { ReactComponent as ChevronIcon } from "../assets/chevron.svg";
import { ReactComponent as ShieldIcon } from "../assets/shield.svg";
import { defaultUser } from "../data/user";

// ProfileItem Component
const ProfileItem: React.FC<{
  title: string;
  value: string;
  onClick?: () => void;
  isDestructive?: boolean;
}> = ({ title, value, onClick, isDestructive = false }) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        gap: "12px",
        cursor: onClick ? "pointer" : "default",
        transition: "opacity 0.2s ease",
      }}
      onClick={onClick}
    >
      <div css={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <ShieldIcon />
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            css={{
              color: isDestructive ? Colors.red : "white",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {title}
          </div>
          <div
            css={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            {value}
          </div>
        </div>
      </div>
      {onClick && (
        <div css={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "24px",
              width: "24px",
            }}
          >
            <ChevronIcon />
          </div>
        </div>
      )}
    </div>
  );
};

// Personal Info Section Component
const PersonalInfoSection: React.FC = () => {
  return (
    <Section title="Personal Info">
      <Container>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            "& > div:not(:last-child)": {
              borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
            },
          }}
        >
          <ProfileItem
            title="Location"
            value={defaultUser.location || "Not specified"}
          />
          <ProfileItem title="Email" value={defaultUser.email} />
          <ProfileItem
            title="Phone number"
            value={defaultUser.phone || "Not specified"}
          />
          <ProfileItem
            title="Social security number"
            value={defaultUser.socialSecurity || "Not specified"}
          />
        </div>
      </Container>
    </Section>
  );
};

// Settings Section Component
const SettingsSection: React.FC = () => {
  const handleNotificationSettings = () => {
    console.log("Notification settings clicked");
  };

  const handleDeleteAccount = () => {
    console.log("Delete account clicked");
  };

  return (
    <Section title="Settings">
      <Container>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            "& > div:not(:last-child)": {
              borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
            },
          }}
        >
          <ProfileItem
            title="Notification preferences"
            value="Manage your notification settings"
            onClick={handleNotificationSettings}
          />
          <ProfileItem
            title="Delete account"
            value="Permanently delete your account"
            onClick={handleDeleteAccount}
            isDestructive={true}
          />
        </div>
      </Container>
    </Section>
  );
};

// Main Profile Component
function Profile(): React.JSX.Element {
  return (
    <>
      <div
        css={{
          padding: "16px",
          paddingBottom: "48px",
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
          boxSizing: "border-box",
        }}
      >
        <PageHeader title="Profile" />

        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <PersonalInfoSection />
          <SettingsSection />
          <button
            css={{
              height: "56px",
              borderRadius: "100px",
              color: Colors.white,
              fontSize: "14px",
              fontWeight: "500",
              border: "1px solid rgba(255, 255, 255, 0.20)",
              backgroundColor: Colors.backgroundBlue,
              // backdropFilter: "blur(30px)",
              boxShadow: "0px 6px 12px 0px rgba(85, 85, 85, 0.12)",
              cursor: "pointer",
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
