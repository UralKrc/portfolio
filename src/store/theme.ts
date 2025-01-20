import { create } from "zustand";

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark:
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  toggleTheme: () => {
    set((state) => {
      const html = document.documentElement;
      const newIsDark = !state.isDark;

      if (newIsDark) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }

      return { isDark: newIsDark };
    });
  },
}));
