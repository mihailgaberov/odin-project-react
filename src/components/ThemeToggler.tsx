import React from "react";
import useThemeStore from "../hooks/useThemeStore";
import styled from "styled-components";

const ToggleButton = styled.button<{ themeType: "light" | "dark" }>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ themeType }) =>
    themeType === "light" ? "#000" : "#fff"};
  color: ${({ themeType }) => (themeType === "light" ? "#fff" : "#000")};
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ themeType }) =>
      themeType === "light" ? "#333" : "#ddd"};
  }
`;

const ThemeToggler: React.FC = () => {
  const [theme, setTheme] = useThemeStore();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ToggleButton themeType={theme} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </ToggleButton>
  );
};

export default ThemeToggler;
