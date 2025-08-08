import { useNavigate } from "react-router-dom";
import { ReactComponent as ChevronIcon } from "../../assets/chevron.svg";
import { Colors } from "../../constants/constants";

export const PageHeader = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "32px",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        css={{
          height: "32px",
          width: "32px",
          borderRadius: "50%",
          border: `1px solid ${Colors.white50}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          padding: 0,
          cursor: "pointer",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: Colors.white,
          },
        }}
      >
        <ChevronIcon
          css={{
            width: "16px",
            height: "16px",
            transform: "rotate(180deg)",
            marginLeft: "-10px",
            marginTop: "-3px",
          }}
        />
      </button>
      <p
        css={{
          fontSize: "14px",
          color: Colors.white,
          fontWeight: 500,
          margin: 0,
        }}
      >
        {title}
      </p>
      {/* Spacer */}
      <div css={{ height: "32px", width: "32px" }} />
    </div>
  );
};
