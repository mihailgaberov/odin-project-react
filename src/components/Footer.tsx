import React from "react";
import useThemeStore from "../hooks/useThemeStore";
import styled from "styled-components";

const StyledFooter = styled.footer<{ themeType: "light" | "dark" }>`
  padding: 1rem;
  text-align: center;
  background-color: ${({ themeType }) =>
    themeType === "light" ? "#e0e0e0" : "#111"};
  color: ${({ themeType }) => (themeType === "light" ? "#000" : "#fff")};
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => {
  const [theme] = useThemeStore();

  return (
    <StyledFooter themeType={theme}>
      <p>Footer Content - Theme is {theme}</p>
    </StyledFooter>
  );
};

export default Footer;
