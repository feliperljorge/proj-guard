import { defaultUser } from "../data/user";
import { Colors } from "../constants/constants";

import { ReactComponent as ShieldIcon } from "../assets/shield.svg";

const Hero: React.FC = ({}) => {
  const { firstName } = defaultUser;
  const reviewAlerts = [1];
  const hasAlerts = reviewAlerts.length > 0;

  return (
    <div
      css={{
        marginTop: "50px",
        marginBottom: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        textAlign: "center",
      }}
    >
      <p
        css={{
          color: Colors.white,
          fontSize: "12px",
          fontWeight: "400",
          margin: 0,
        }}
      >
        Hi, {firstName}
      </p>

      <h1
        css={{
          fontSize: "24px",
          fontWeight: "500",
          margin: 0,
          background: hasAlerts
            ? "linear-gradient(90deg, #FF9999 4.95%, #E574FB 42.96%, #FDF4FF 84.36%, var(--base-sky-1000, #00172E) 95.32%, var(--base-sky-800, #043C67) 103.53%, var(--base-sky-800, #043C67) 169.25%)"
            : "linear-gradient(87deg,rgba(135, 239, 90, 0) 0%, #86EF5A 20%, #10D0B7 50%, #E9FFDB 80%,rgba(233, 255, 219, 0) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {hasAlerts ? "You have some alerts" : "We're keeping watch"}
      </h1>

      <div
        css={{
          margin: "auto",
          width: "fit-content",
          padding: "1.5px",
          borderRadius: "100px",
          background: hasAlerts
            ? "linear-gradient(90deg, #8B8BF9 0%, #E574FB 50%, #7373ed 100%)"
            : "transparent",
        }}
      >
        <div
          css={{
            padding: "8px 12px",
            borderRadius: "100px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: hasAlerts
              ? Colors.backgroundBlue
              : "rgba(255, 255, 255, 0.07)",
            border: hasAlerts ? "none" : "1px solid rgba(255, 255, 255, 0.12)",
            color: Colors.white,
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          <ShieldIcon />

          {hasAlerts
            ? `Review ${reviewAlerts.length} ${
                reviewAlerts.length === 1 ? "alert" : "alerts"
              }`
            : "No issues right now"}
        </div>
      </div>
    </div>
  );
};

export default Hero;
