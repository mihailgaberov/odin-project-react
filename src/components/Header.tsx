import React from "react";
import useThemeStore from "../hooks/useThemeStore";
import styled from "styled-components";

const StyledHeader = styled.header<{ themeType: "light" | "dark" }>`
  padding: 1rem;
  text-align: center;
  background-color: ${({ themeType }) =>
    themeType === "light" ? "#f0f0f0" : "#222"};
  color: ${({ themeType }) => (themeType === "light" ? "#000" : "#fff")};
`;

const Header: React.FC = () => {
  const [theme] = useThemeStore();

  return (
    <StyledHeader themeType={theme}>
      <h1>Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</h1>
    </StyledHeader>
  );
};

export default Header;
