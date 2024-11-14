import React from "react";
import useThemeStore from "../hooks/useThemeStore";
import styled from "styled-components";

const StyledHeader = styled.header<{ $themetype: "light" | "dark" }>`
  padding: 1rem;
  text-align: center;
  background-color: ${({ $themetype }) =>
    $themetype === "light" ? "#f0f0f0" : "#222"};
  color: ${({ $themetype }) => ($themetype === "light" ? "#000" : "#fff")};
`;

const Header: React.FC = () => {
  const [theme] = useThemeStore();

  return (
    <StyledHeader $themetype={theme}>
      <h1>Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</h1>
    </StyledHeader>
  );
};

export default Header;
