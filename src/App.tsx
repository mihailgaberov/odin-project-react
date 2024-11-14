import React from "react";
import Header from "./components/Header";
import ThemeToggler from "./components/ThemeToggler";
import Footer from "./components/Footer";
import useThemeStore from "./hooks/useThemeStore";
import styled from "styled-components";

const AppContainer =
  styled.div <
  { themeType: "light" | "dark" } >
  `
  min-height: 100vh;
  background-color: ${({ themeType }) =>
    themeType === "light" ? "#ffffff" : "#333333"};
  color: ${({ themeType }) => (themeType === "light" ? "#000000" : "#ffffff")};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 3rem; // To ensure footer is visible
`;

const App: React.FC = () => {
  const [theme] = useThemeStore();

  return (
    <AppContainer themeType={theme}>
      <Header />
      <ThemeToggler />
      <Footer />
    </AppContainer>
  );
};

export default App;
