import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "app-theme";

const getThemeFromLocalStorage = (): Theme => {
  return (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || "light";
};

const subscribe = (callback: () => void): (() => void) => {
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("storage", callback);
  };
};

const useThemeStore = (): [Theme, (newTheme: Theme) => void] => {
  const theme = useSyncExternalStore(subscribe, getThemeFromLocalStorage);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    window.dispatchEvent(new Event("storage"));
  };

  return [theme, setTheme];
};

export default useThemeStore;
