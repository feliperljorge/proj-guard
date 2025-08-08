/** @jsxImportSource @emotion/react */
import React from "react";
import Section from "../components/shared/Section";
import Container from "../components/shared/Container";
import { Colors } from "../constants/constants";
import { PageHeader } from "../components/shared/PageHeader";
import { ReactComponent as ChevronIcon } from "../assets/chevron.svg";
import { ReactComponent as ShieldIcon } from "../assets/shield.svg";
import { defaultUser } from "../data/user";
import { ReactComponent as PlaidIcon } from "../assets/plaid-icon.svg";

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
            value="Monthly"
            onClick={handleNotificationSettings}
          />
          <ProfileItem
            title="Delete account"
            value="Permanently delete your account"
            onClick={handleDeleteAccount}
          />
        </div>
      </Container>
    </Section>
  );
};

const ProfileCard: React.FC = () => {
  return (
    <div
      css={{
        height: "calc((100vw - 40px) / 2)",
        maxHeight: "200px",
        minHeight: "120px",
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.20)",
        background: "rgba(228, 231, 234, 0.15)",
        boxShadow: "0 2px 24px 0 #000, 0 6px 12px 0 rgba(85, 85, 85, 0.12)",
        backdropFilter: "blur(30px)",
        padding: "20px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div css={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <PlaidIcon />
          <span css={{ fontSize: "20px", fontWeight: "600" }}>Passport</span>
        </div>

        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            alignItems: "flex-start",
          }}
        >
          <p
            css={{
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "24px",
              margin: 0,
              background:
                "linear-gradient(92deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.8) 20%, #fff 42%, rgba(255, 255, 255, 0.8) 60%, rgba(255, 255, 255, 0.5) 80%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {defaultUser.firstName} {defaultUser.lastName}
          </p>
          <p
            css={{
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "24px",
              margin: 0,
              opacity: 0.6,
              background:
                "linear-gradient(92deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.8) 20%, #fff 42%, rgba(255, 255, 255, 0.8) 60%, rgba(255, 255, 255, 0.5) 80%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {defaultUser.city}
          </p>
        </div>
      </div>
      <div
        css={{
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.1)",
          height: "100%",
          aspectRatio: "3/4",
          minWidth: "60px",
          flexShrink: 0,
        }}
      >
        {/* profile image here */}
      </div>
    </div>
  );
};

function Profile(): React.JSX.Element {
  return (
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
      <PageHeader title="Account details" />

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <ProfileCard />
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
  );
}

export default Profile;
