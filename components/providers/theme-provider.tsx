"use client";
import { ThemeProvider } from "next-themes";

const ThemesProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemesProvider;
