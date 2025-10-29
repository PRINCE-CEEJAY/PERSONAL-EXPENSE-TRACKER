import { createContext } from "react";
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
export type Theme = "dark" | "light" | "system";

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);
