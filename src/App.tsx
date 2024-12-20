import React from "react";
import Header from "./components/Header";
import ThemeToggler from "./components/ThemeToggler";
import Greeting from "./components/Greeting";
import Footer from "./components/Footer";
import useThemeStore from "./hooks/useThemeStore";
import styled from "styled-components";
import Person from "./components/Person";
import InfiniteLoop from "./components/InfiniteLoop";

const AppContainer = styled.div<{ $$themetype: "light" | "dark" }>`
  min-height: 100vh;
  background-color: ${({ $$themetype }) =>
    $$themetype === "light" ? "#ffffff" : "#333333"};
  color: ${({ $$themetype }) =>
    $$themetype === "light" ? "#000000" : "#ffffff"};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
`;

const App: React.FC = () => {
  const [theme] = useThemeStore();

  return (
    <AppContainer $$themetype={theme}>
      <Header />
      <ThemeToggler />
      <Greeting name="Mihail" />
      <Person />
      {/* <InfiniteLoop /> */}
      <Footer />
    </AppContainer>
  );
};

export default App;
