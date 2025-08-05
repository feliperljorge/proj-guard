/** @jsxImportSource @emotion/react */
import React from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeaderButton } from "./Section";

interface ViewAllButtonProps {
  to: string;
  children?: React.ReactNode;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({
  to,
  children = "View all",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <SectionHeaderButton onClick={handleClick}>{children}</SectionHeaderButton>
  );
};

export default ViewAllButton;
