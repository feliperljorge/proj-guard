/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/constants";
import { ReactComponent as CloseIcon } from "../../assets/x.svg";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ANIMATION_DURATION = 250; // milliseconds

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DURATION);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        css={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(2px)",
          zIndex: 1000,
          animation: isClosing
            ? `fadeOut ${ANIMATION_DURATION}ms ease`
            : `fadeIn ${ANIMATION_DURATION}ms ease`,
        }}
        onClick={handleClose}
      />

      {/* Bottom Sheet */}
      <div
        css={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(180deg, #00172E 25%, #02294b 100%)",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          zIndex: 1001,
          maxHeight: "80vh",
          overflow: "hidden",
          animation: isClosing
            ? `slideDown ${ANIMATION_DURATION}ms ease`
            : `slideUp ${ANIMATION_DURATION}ms ease`,
          boxShadow: "0px -8px 32px rgba(0, 0, 0, 0.3)",
          //   backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          css={{
            padding: "20px",
            paddingBottom: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={handleClose}
            css={{
              margin: 0,
              fontSize: "18px",
              fontWeight: "600",
              color: Colors.white,
              height: "32px",
              width: "32px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <CloseIcon />
          </button>
        </div>

        <div
          css={{
            padding: "20px",
            paddingTop: "0px",
            // maxHeight: "calc(80vh - 80px)",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "2px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "2px",
            },
          }}
        >
          {children}
        </div>
      </div>

      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }
          
          @keyframes slideDown {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(100%);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default BottomSheet;
