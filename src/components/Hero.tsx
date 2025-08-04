/** @jsxImportSource @emotion/react */

import { defaultUser } from "../data/user";
import { Colors } from "../constants/constants";

const Hero: React.FC = ({}) => {
  const { firstName } = defaultUser;
  const reviewAlerts = [""];
  const hasAlerts = reviewAlerts.length > 0;

  return (
    <div
      css={{
        marginTop: "50px",
        marginBottom: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
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
            ? "linear-gradient(90deg, #F99 4.95%, #E574FB 42.96%, #FDF4FF 84.36%, var(--base-sky-1000, #00172E) 95.32%, var(--base-sky-800, #043C67) 103.53%, var(--base-sky-800, #043C67) 169.25%)"
            : "linear-gradient(87deg, rgba(134, 239, 90, 0.00) 0.86%, #86EF5A 14.65%, #10D0B7 35.33%, #E9FFDB 56.02%, rgba(233, 255, 219, 0.00) 69.81%)",
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
          padding: "8px 12px",
          borderRadius: "100px",
          position: "relative",
          backgroundColor: hasAlerts
            ? Colors.backgroundBlue
            : "rgba(255, 255, 255, 0.07)",
          color: Colors.white,
          fontSize: "13px",
          fontWeight: "600",
          ...(hasAlerts && {
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-1px",
              left: "-1px",
              right: "-1px",
              bottom: "-1px",
              borderRadius: "100px",
              background:
                "linear-gradient(90deg, #F99 0%, #E574FB 50%, #FDF4FF 100%)",
              zIndex: -1,
            },
          }),
          ...(!hasAlerts && {
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }),
        }}
      >
        {hasAlerts
          ? `Review ${reviewAlerts.length} ${
              reviewAlerts.length === 1 ? "alert" : "alerts"
            }`
          : "No issues right now"}
      </div>
    </div>
  );
};

export default Hero;
